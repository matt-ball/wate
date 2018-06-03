import React from 'react'
import { Redirect } from 'react-router-dom'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.change = this.change.bind(this)
    this.submit = this.submit.bind(this)

    this.state = {
      id: '',
      redirect: false
    }
  }

  change (e) {
    this.setState({
      id: e.target.value
    })
  }

  submit (e) {
    e.preventDefault()
    this.setState({
      redirect: true
    })
  }

  render () {
    const { id, redirect } = this.state

    if (redirect) {
      return <Redirect to={{ pathname: '/queue', state: { id } }} />
    }

    return (
      <div>
        <p>Enter your Wate number:</p>
        <form>
          <input type='text' onChange={this.change} />
          <button onClick={this.submit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Home
