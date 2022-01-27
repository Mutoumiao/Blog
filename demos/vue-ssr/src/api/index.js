import axios from 'axios'

export function fetchPostItem(id) {
  return axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
}