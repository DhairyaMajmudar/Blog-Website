export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Blog Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Blog Slug ',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      title: 'Title Image',
      type: 'image',
    },
    {
      name: 'smallDescription',
      title: 'Small Description',
      type: 'text',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    },
  ],
}
