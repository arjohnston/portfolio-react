import React, { Component } from 'react'
import Home from './home/Home'
import Tictactoe from './tictactoe/Tictactoe'
import Simon from './simon/Simon'

var ReactRouter = require('react-router-dom')
var Router = ReactRouter.BrowserRouter
var Route = ReactRouter.Route
var Switch = ReactRouter.Switch

class App extends Component {
  render () {
    return (
      <Router>
        <div className='wrapper'>
          <Switch>
            <Route exact path='/projects/' component={Home} />
            <Route path='/projects/tictactoe' component={Tictactoe} />
            <Route path='/projects/simon' component={Simon} />
            <Route render={function () {
              return <p>Project not found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
