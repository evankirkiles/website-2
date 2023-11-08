/*
 * Software.ts
 * Author: evan kirkiles
 * Created On Wed Nov 08 2023
 * 2023 Digital Portfolio
 */

import { FiFile, FiHardDrive } from 'react-icons/fi';
import { defineArrayMember, defineField, defineType } from 'sanity';
import pageElements from '../page';

const Software = defineType({
  name: 'software',
  type: 'document',
  title: 'Software',
  icon: FiHardDrive,
  groups: [
    { name: 'information', title: 'Information', default: true },
    { name: 'page', title: 'Page' },
  ],
  fields: [
    defineField({
      name: 'short_title',
      type: 'string' as const,
      title: 'Short Title',
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
      group: 'information',
      description: 'A short title for the table view of the software.',
    }),
    defineField({
      name: 'link',
      type: 'url' as const,
      title: 'Link',
      group: 'information',
      description: 'A link to a page for the software.',
    }),
    defineField({
      name: 'date',
      type: 'date' as const,
      title: 'Date',
      description: 'When was this software created?',
      group: 'information',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY,',
      },
    }),
    defineField({
      name: 'group',
      type: 'string' as const,
      title: 'Group',
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
      group: 'information',
      description: 'A group for the software.',
    }),

    /* ---------------------------------- Page ---------------------------------- */

    defineField({
      name: 'title',
      type: 'string' as const,
      title: 'Title',
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
      group: 'page',
      description: 'The title of the software.',
    }),
    defineField({
      name: 'slug',
      type: 'slug' as const,
      title: 'Slug',
      group: 'page',
      description: "(Optional) A slug for the software's page on the site.",
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array' as const,
      title: 'Page Builder',
      group: 'page',
      description: "The event's page on the DAY site.",
      // map all of our page elements to pageBuilder sub-types
      of: pageElements.map(({ title, name }) =>
        defineArrayMember({
          title,
          type: name,
        })
      ),
    }),
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
      subtitle: 'short_title',
    },
  },
});

export default Software;
