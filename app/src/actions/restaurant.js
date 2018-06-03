import axios from 'axios'

const restaurant = {
  get: (id) => {
    return axios.get('/api/restaurant/' + id)
  }
}

export default restaurant
