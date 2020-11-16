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
      // 選択したサムネイルID
      selectedThumbnailId: undefined,
      // 画像のトランジション
      imageTransitionName: 'prev',
      // 表示状態
      isVisible: false,
      // モーダル内のサムネイルの高さ
      thumbnailHeight: 0,
      // サムネイルが読み込み完了したかどうか
      isThumbnailLoaded: false,
    }
  },
  watch: {
    // サムネイルが選択（変更）されたらサムネイルの読み込み状態を読込中にする
    selectedThumbnailId() {
      this.isThumbnailLoaded = false
    },
  },
  computed: {
    // 現在表示中のサムネイルオブジェクト
    currentThumbnail() {
      const self = this
      return _.find(self.thumbnails, function (thumb) {
        return thumb.id === self.selectedThumbnailId
      })
    },
    // 現在表示中のサムネイルのインデックス番号
    currentThumbnailIndex() {
      const self = this
      return _.findIndex(self.thumbnails, function (thumb) {
        return thumb.id === self.selectedThumbnailId
      })
    },
    nextThumbnail() {
      const nextIndex = this.currentThumbnailIndex + 1
      return this.thumbnails[
        nextIndex > this.thumbnails.length - 1 ? 0 : nextIndex
      ]
    },
    prevThumbnail() {
      const prevIndex = this.currentThumbnailIndex - 1
      return this.thumbnails[
        prevIndex < 0 ? this.thumbnails.length - 1 : prevIndex
      ]
    },
    // サムネイルをラップしている要素の高さ
    containerStyle() {
      return {
        height: this.thumbnailHeight + 'px',
      }
    },
  },
  methods: {
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
      this.selectedThumbnailId = this.prevThumbnail.id
    },
    // 次のサムネを表示
    onClickNext() {
      this.selectedThumbnailId = this.nextThumbnail.id
    },
    // 画像の読み込み完了時に実行する
    onLoad(event) {
      this.thumbnailHeight =
        event.target.naturalHeight > 300 ? 300 : event.target.naturalHeight
      this.isThumbnailLoaded = true
    },
  },
}).mount('#app')
