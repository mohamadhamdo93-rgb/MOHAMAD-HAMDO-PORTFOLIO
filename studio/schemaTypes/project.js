export default {
  name: 'project',
  title: 'Projects',
  type: 'document',

  fields: [

    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },

    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },

    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },

    {
      name: 'tools',
      title: 'Tools Used',
      type: 'array',
      of: [{ type: 'string' }],
    },

    {
      name: 'projectDuration',
      title: 'Project Duration',
      type: 'string',
    },

    {
      name: 'likes',
      title: 'Likes',
      type: 'number',
      initialValue: 0,
    },

    {
      name: 'views',
      title: 'Views',
      type: 'number',
      initialValue: 0,
    },

    {
      name: 'commentsCount',
      title: 'Comments Count',
      type: 'number',
      initialValue: 0,
    },

    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },

    {
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
    },

  ],
}