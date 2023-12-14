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
      name: 'image',
      type: 'image',
      title: 'Front Image',
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{type: 'block'}],
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string'}],
      options: {list: ['react', 'svelte', 'vue']},
    },
  ],
}
