/*
 * structure.ts
 * Author: evan kirkiles
 * Created On Sun Aug 27 2023
 * 2023 Digital Portfolio
 */

import { FiSettings, FiCalendar, FiUser } from 'react-icons/fi';
import { DocumentsIcon, DocumentTextIcon, HomeIcon } from '@sanity/icons';
import { StructureBuilder, StructureResolver } from 'sanity/structure';
import { ComponentType } from 'react';

/* -------------------------------- Settings -------------------------------- */

// These are the root pages and their corresponding icons. Add entries here
// to make quick-to-jump-to pages with specialized icons.
// const ROOT_PAGES: Record<string, [ComponentType<{}>, string]> = {
//   page0: [HomeIcon, '/'],
//   page1: [FiUser, '/art'],
//   page2: [FiUser, '/software'],
//   page3: [FiUser, '/about'],
//   page4: [FiUser, '/about'],
// };

/* --------------------------- Custom list entries -------------------------- */

const Settings = (S: StructureBuilder) =>
  S.listItem()
    .title('Settings')
    .icon(FiSettings)
    .child(
      S.document()
        .schemaType('site_settings')
        .documentId('site_settings')
        .title('Site Settings')
    );

const RootPages = (S: StructureBuilder) =>
  S.listItem()
    .title('Root Pages')
    .icon(DocumentsIcon)
    .child(
      S.documentTypeList('site_page')
        .title('Root Pages')
        .filter('_type == "site_page" && path.current in path("*")')
    );

const CustomPages = (S: StructureBuilder) =>
  S.documentTypeListItem('site_page')
    .title('Nested Pages')
    .icon(DocumentTextIcon)
    .child(
      S.documentTypeList('site_page')
        .title('Nested Pages')
        .filter('_type == "site_page" && path.current in path("*.**")')
    );

/* -------------------------------------------------------------------------- */
/*                                  Structure                                 */
/* -------------------------------------------------------------------------- */

// Combine desk list entries into the base list
const structure: StructureResolver = (S) => {
  return S.list()
    .title('Content Home')
    .items([
      Settings(S),
      RootPages(S),
      CustomPages(S),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['site_settings', 'site_page', 'media.tag'].includes(
            listItem.getId() || ''
          )
      ),
    ]);
};

export default structure;
