import React, { Component } from 'react'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/home'
import Portfolio from './pages/projects/'
import Tictactoe from './pages/projects/tic-tac-toe'
import Simon from './pages/projects/simon'
import Markdown from './pages/projects/markdown-editor'
import Pixelated from './pages/projects/pixelated'
import Error from './pages/error'

import Layout from './components/layout/Layout'

const ReactRouter = require('react-router-dom')
const Router = ReactRouter.BrowserRouter
const Route = ReactRouter.Route
const Switch = ReactRouter.Switch

export default class App extends Component {
  render () {
    return (
      <Router>
        <ScrollToTop>
          <div className='wrapper'>
            <Layout>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/projects/' component={Portfolio} />
                <Route path='/projects/tic-tac-toe' component={Tictactoe} />
                <Route path='/projects/simon' component={Simon} />
                <Route path='/projects/markdown-editor' component={Markdown} />
                <Route path='/projects/pixelated' component={Pixelated} />
                <Route
                  render={function () {
                    return <Error />
                  }}
                />
              </Switch>
            </Layout>
          </div>
        </ScrollToTop>
      </Router>
    )
  }
}
