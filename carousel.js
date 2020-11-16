Vue.createApp({
  data() {
    return {
      // サムネイル配列
      items: [
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
      curretnHeight: 0,
      selectedIndex: 0,
      // 画像のトランジション
      imageTransitionName: 'prev',
    }
  },
  computed: {
    target() {
      const self = this
      return this.items[self.selectedIndex]
    },
    lastIndex() {
      return this.items.length - 1
    },
  },
  methods: {
    onClickPager(index) {
      this.imageTransitionName = this.selectedIndex < index ? 'next' : 'prev'
      this.selectedIndex = index
      this.setTargetHeight(index)
    },
    openModal(thumb) {
      this.isVisible = true
      this.selectedThumbnailId = thumb.id
    },
    // モーダルを閉じる
    closeModal() {
      this.isVisible = false
      this.selectedThumbnailId = undefined
    },
    // 前のサムネを表示
    onClickPrev() {
      this.imageTransitionName = 'prev'
      this.selectedIndex =
        this.selectedIndex <= 0 ? this.lastIndex : this.selectedIndex - 1
      this.setTargetHeight(this.selectedIndex)
    },
    // 次のサムネを表示
    onClickNext() {
      this.imageTransitionName = 'next'
      this.selectedIndex =
        this.selectedIndex >= this.lastIndex ? 0 : this.selectedIndex + 1
      this.setTargetHeight(this.selectedIndex)
    },
    // 画像の読み込み完了時に実行する
    onLoad(event) {
      this.thumbnailHeight =
        event.target.naturalHeight > 300 ? 300 : event.target.naturalHeight
      this.isThumbnailLoaded = true
    },
  },
}).mount('#app')
