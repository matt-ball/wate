import React from 'react'
import queue from '../actions/queue'

class Queue extends React.Component {
  constructor () {
    super()
    this.state = {
      details: []
    }
  }

  getQueue = (id) => {
    queue.get(id).then((data) => {
      const { name, restaurant, position } = data.data

      const details = (
        <div>
          <div>Name: {name}</div>
          <div>Restaurant: {restaurant}</div>
          <div>Position: {position}</div>
        </div>
      )

      this.setState({ details })
    })
  }

  componentDidMount () {
    const state = this.props.location.state
    const params = this.props.match.params
    const id = (state && state.id) || (params && params.id)

    if (id) {
      this.getQueue(id)
    }
  }

  render () {
    return (
      <div>
        {this.state.details}
      </div>
    )
  }
}

export default Queue
