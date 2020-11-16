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
    }
  },
  computed: {
    canCreateTodo() {
      return this.todoTitle !== ''
    },
  },
}).mount('#app')
