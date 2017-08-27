import React, { Component } from 'react'
import Home from './home/Home'
import Portfolio from './portfolio/Portfolio'
import Tictactoe from './portfolio/tictactoe/Tictactoe'
import Simon from './portfolio/simon/Simon'
import Markdown from './portfolio/markdown/Markdown'
import Sidescroller from './portfolio/sidescroller/Sidescroller'
import Layout from './layout/Layout'
import Error from './error/Error'

var ReactRouter = require('react-router-dom')
var Router = ReactRouter.BrowserRouter
var Route = ReactRouter.Route
var Switch = ReactRouter.Switch

export default class App extends Component {
  render () {
    return (
      <Router>
        <div className='wrapper'>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/portfolio/' component={Portfolio} />
              <Route path='/portfolio/tictactoe' component={Tictactoe} />
              <Route path='/portfolio/simon' component={Simon} />
              <Route path='/portfolio/markdown' component={Markdown} />
              <Route path='/portfolio/sidescroller' component={Sidescroller} />
              <Route render={function () {
                return <Error />
              }} />
            </Switch>
          </Layout>
        </div>
      </Router>
    )
  }
}
