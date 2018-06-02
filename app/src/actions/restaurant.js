import axios from 'axios'

const restaurant = {
  get: (id) => {
    return axios.get('http://localhost:3001/api/restaurant/' + id)
  }
}

export default restaurant
