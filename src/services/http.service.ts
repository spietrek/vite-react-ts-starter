import axios from 'axios'

export default axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  timeout: 15000,
})
