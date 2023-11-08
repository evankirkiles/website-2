/*
 * index.ts
 * Author: evan kirkiles
 * Created On Sun Aug 27 2023
 * 2023 Digital Portfolio
 *
 * This is the base export which exposes your Schema types to Sanity. All new
 * types and documents should be added to this array.
 */

import { SchemaTypeDefinition } from '@sanity/types';
import SitePage from './SitePage';
import pageElements from './page';
import entities from './entities';

const schemas: SchemaTypeDefinition[] = [SitePage, ...entities, ...pageElements];

export default schemas;
