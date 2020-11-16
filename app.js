Vue.createApp({
  data() {
    return {
      todoTitle: '',
      todoDescription: '',
      searchWord: '',
      todoCategories: [],
      hideDoneTodo: false,
    }
  },
}).mount('#app')
