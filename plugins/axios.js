import axios from 'axios'

export default axios.create({
  baseURL: 'https://nuxtfire.firebaseio.com/'
})
