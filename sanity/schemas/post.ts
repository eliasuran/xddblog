export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'body',
      type: 'string',
      title: 'Body',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [
        {
          type: 'string',
          name: 'tag',
          fields: [
            {type: 'string', name: 'react'},
            {type: 'string', name: 'svelte'},
            {type: 'string', name: 'vue'},
          ],
        },
      ],
    },
  ],
}
