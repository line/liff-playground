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
      originalContentUrl: `${location.href}assets/stp_image.png`,
      previewImageUrl: `${location.href}assets/stp_image.png`,
    },
  },
  {
    label: 'video',
    value: {
      type: 'video',
      originalContentUrl: `${location.href}assets/stp_video.mp4`,
      previewImageUrl: `${location.href}assets/stp_video.mp4`,
      trackingId: 'track-id',
    },
  },
  {
    label: 'audio',
    value: {
      type: 'audio',
      originalContentUrl: `${location.href}assets/stp_audio.mp3`,
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
