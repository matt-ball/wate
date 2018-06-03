import axios from 'axios'

const queue = {
  get: (id) => {
    return axios.get('/api/queue/' + id)
  }
}

export default queue
