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
}).mount('#app')
