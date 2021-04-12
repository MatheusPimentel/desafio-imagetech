import axios from 'axios'

const standard = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 100000,
  transformResponse: [
    function (data) {
      return data
    }
  ]
})

export default standard
