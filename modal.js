Vue.createApp({
  data() {
    return {
      // サムネイル配列
      thumbnails: [
        {
          id: 1,
          src: 'https://placehold.jp/300x300.png',
        },
        {
          id: 2,
          src: 'https://placehold.jp/3d4070/ffffff/300x300.png',
        },
        {
          id: 3,
          src: 'https://placehold.jp/b32023/ffffff/300x300.png',
        },
      ],
    }
  },
  methods: {
    openModal(thumb) {
      console.log(thumb)
    },
  },
}).mount('#app')
