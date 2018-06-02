import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Home from './views/home'
import Restaurant from './views/restaurant'
import Queue from './views/queue'
import './index.css'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <h1>Wate</h1>
          <Route exact path='/' component={Home} />
          <Route exact path='/restaurant' component={Restaurant} />
          <Route exact path='/queue' component={Queue} />
          <Route exact path='/queue/:id' component={Queue} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
