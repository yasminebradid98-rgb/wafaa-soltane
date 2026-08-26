// Photo Schema
export const photoType = {
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'caption',
      title: 'Caption / Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Allows client to crop/focus on important parts of the photo
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text (for SEO)',
        }
      ]
    },
  ],
}

// Video Schema
export const videoType = {
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    },
  ],
}

// Export both content types to Sanity Studio
export const schemaTypes = [photoType, videoType]