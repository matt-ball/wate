import React, { Component } from 'react'
import restaurant from '../actions/restaurant'

class Restaurant extends Component {
  constructor (props) {
    super(props)
    this.state = {
      details: []
    }
  }

  componentDidMount () {
    restaurant.get(1).then((data) => {
      data = data.data
      const details = data.map((item, i) => {
        return (
          <div key={i}>
            <div>ID: {item.id}</div>
            <div>Name: {item.name}</div>
          </div>
        )
      })

      this.setState({ details })
    })
  }

  render () {
    return (
      <div>
        {this.state.details}
      </div>
    )
  }
}

export default Restaurant
