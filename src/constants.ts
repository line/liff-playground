export const SHARE_TARGET_PICKER_FIXED_ARGUMENT_LIST = [
  {
    label: 'text',
    value: {
      type: 'text',
      text: 'Hello, World!',
    },
  },
  {
    label: 'sticker',
    value: {
      type: 'sticker',
      packageId: '446',
      stickerId: '1988',
    },
  },
  {
    label: 'image',
    value: {
      type: 'image',
      originalContentUrl: 'https://example.com/original.jpg',
      previewImageUrl: 'https://example.com/preview.jpg',
    },
  },
  {
    label: 'video',
    value: {
      type: 'video',
      originalContentUrl: 'https://example.com/original.mp4',
      previewImageUrl: 'https://example.com/preview.jpg',
      trackingId: 'track-id',
    },
  },
  {
    label: 'audio',
    value: {
      type: 'audio',
      originalContentUrl: 'https://example.com/original.m4a',
      duration: 60000,
    },
  },
  {
    label: 'location',
    value: {
      type: 'location',
      title: 'my location',
      address: '〒102-8282 東京都千代田区紀尾井町1番3号',
      latitude: 35.67966,
      longitude: 139.73669,
    },
  },
].map(({ label, value }) => ({
  label,
  value: JSON.stringify(value, null, 4),
}))
