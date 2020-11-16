Vue.createApp({
  data() {
    return {
      todoTitle: '',
      todoDescription: '',
      searchWord: '',
      todoCategories: [],
      selectCategory: '',
      hideDoneTodo: false,
      order: 'desc',
      categoryName: '',
    }
  },
  computed: {
    canCreateTodo() {
      return this.todoTitle !== ''
    },
    canCreateCategory() {
      return this.categoryName !== ''
    },
  },
  methods: {
    createTodo() {
      if (!this.canCreateTodo) {
        return
      }

      // Todoを追加する
      this.todoTitle = ''
      this.todoDescription = ''
      this.todoCategories = []
    },
    canCreateCategory() {
      if (!this.canCreateCategory) {
        return
      }

      // カテゴリを追加する

      this.categoryName = ''
    },
  },
}).mount('#app')
