import Vue from 'vue'

export const getPost = Vue.axios.get('https://jsonplaceholder.typicode.com/posts?_limit=50').then((response) => {
  return response.data
})


