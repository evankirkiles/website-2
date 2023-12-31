/*
 * SitePage.ts
 * Author: evan kirkiles
 * Created On Sun Aug 27 2023
 * 2023 Digital Portfolio
 */

import { defineArrayMember, defineField, defineType } from 'sanity';
import pageElements from './page';

const SitePage = defineType({
  name: 'site_page',
  type: 'document' as const,
  title: 'Site Page',
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string' as const,
      title: 'Title',
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
      description: 'The title of the page.',
      group: 'content',
    }),
    defineField({
      name: 'path',
      type: 'slug' as const,
      title: 'Path',
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
      description:
        'The path to the page on the site, as a relative path. E.g. ".artists.johnlennon".',
      group: 'content',
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array' as const,
      title: 'Page Builder',
      description: 'Assemble your page using configurable modules.',
      group: 'content',
      validation: (Rule) => Rule.required(),
      // map all of our page elements to pageBuilder sub-types
      of: pageElements.map(({ title, name }) =>
        defineArrayMember({
          title,
          type: name,
        })
      ),
    }),

    /* -------------------------------- SEO Types ------------------------------- */

    defineField({
      name: 'seo_title',
      type: 'string' as const,
      title: 'SEO Title',
      group: 'seo',
      description:
        "An SEO title (appears in the tab bar). If unset, uses the page's title.",
    }),
    defineField({
      name: 'seo_description',
      type: 'string' as const,
      title: 'SEO Description',
      group: 'seo',
      description:
        "An SEO description. If unset, uses text from the page's content.",
    }),
    defineField({
      name: 'seo_keywords',
      type: 'string' as const,
      title: 'SEO Keywords',
      group: 'seo',
      description: 'SEO keywords.',
    }),

    /* ------------------------------ Revalidation ------------------------------ */

    defineField({
      name: 'last_revalidated',
      type: 'datetime' as const,
      title: 'Last Revalidated',
      description:
        'When this page was last revalidated. Re-publish or manually revalidate to change.',
      readOnly: true,
      options: {
        dateFormat: 'dddd, MMMM Do YYYY,',
        timeFormat: 'h:mm A',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'path.current',
    },
    prepare: ({ title, subtitle }) => {
      return {
        title,
        subtitle: subtitle.replace('.', '/'),
      };
    },
  },
});

export default SitePage;
