Vue.createApp({
  data() {
    return {
      todoTitle: '',
      todoDescription: '',
      searchWord: '',
      todoCategories: [],
      selectCategory: '',
      todos: [],
      categories: [],
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
      return this.categoryName !== '' && !this.existsCategory
    },
    existsCategory() {
      const categoryName = this.categoryName
      return this.categories.includes(categoryName)
    },
  },
  methods: {
    createTodo() {
      if (!this.canCreateTodo) {
        return
      }

      // Todoを追加する
      this.todos.push({
        id: 'todo-' + Date.now(),
        title: this.todoTitle,
        description: this.todoDescription,
        categories: this.todoCategories,
        dateTiem: Date.now(),
        done: false,
      })

      this.todoTitle = ''
      this.todoDescription = ''
      this.todoCategories = []
    },
    canCreateCategory() {
      if (!this.canCreateCategory) {
        return
      }

      // カテゴリを追加する
      this.categories.push(this.categoryName)

      this.categoryName = ''
    },
  },
}).mount('#app')
