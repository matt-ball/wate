import axios from 'axios'

const queue = {
  get: (id) => {
    return axios.get('http://localhost:3001/api/queue/' + id)
  }
}

export default queue
