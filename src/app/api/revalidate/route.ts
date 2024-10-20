/*
 * route.ts
 * Author: evan kirkiles
 * Created On Sun Aug 27 2023
 * 2023 Digital Portfolio
 *
 * This file defines a route handler for performing on-demand revalidation
 * for our Sanity assets. For example, it tells Next to regenerate a SitePage
 * when it is updated or created by us in the Sanity desk.
 *
 * HOWEVER—Sanity isn't quick enough to update the asset, so Next.js gets the
 * _old version_ of the document when it re-requests it. To fix this, we don't
 * trigger the route handler whenevr the document changes, but rather whenever
 * the last_revalidated field changes. By patching this field a second after we
 * publish the rest of the site page, we can get the updated site page info
 * which has propagated through to Sanity's servers.
 *
 * You should have a corresponding webhook set up in Sanity with at least:
 *  - Filter: _type == "site_page" && delta::changedAny(last_revalidated)
 *  - Projection: {_type, _id, slug }
 * Also make sure to set up your secrets across Vercel + Sanity.
 */

import { SANITY_WEBHOOK_SECRET } from '@/env';
import { SitePage, SiteSettings, Software } from '@/sanity/schema';
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

// to add other revalidation entities, add their types in the signature here.
function checkIsRevalidationEntity(
  body: any
): body is SitePage | Software | SiteSettings {
  return !!body._type;
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  // first, validate the request signature
  const signature = req.headers.get(SIGNATURE_HEADER_NAME);
  if (!signature) return NextResponse.json({});
  const isValid = isValidSignature(
    JSON.stringify(body),
    signature,
    SANITY_WEBHOOK_SECRET
  );
  if (!isValid) {
    return NextResponse.json(
      { success: false, message: 'Invalid signature.' },
      { status: 401 }
    );
  }
  if (!body || !checkIsRevalidationEntity(body)) {
    return NextResponse.json(
      { success: false, message: 'Invalid body.' },
      { status: 400 }
    );
  }

  // if valid request, attempt to do the revalidation
  let revalidated: string[] = [];
  switch (body._type) {
    case 'site_page':
      revalidated.push(`page${body.path.current}`);
      break;
    case 'site_settings':
      revalidated.push(`site_settings`);
      break;
    case 'software':
      revalidated.push(`software`);
      break;
    default:
      throw new Error('Invalid revalidation type.');
  }
  revalidated.forEach(revalidateTag);
  return NextResponse.json({ success: true, revalidated });
}
