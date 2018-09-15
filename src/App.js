import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'
import Layout from './components/layout/Layout'

import Home from './pages/home'
import Portfolio from './pages/projects/'
import Tictactoe from './pages/projects/tic-tac-toe'
import Simon from './pages/projects/simon'
import Markdown from './pages/projects/markdown-editor'
import Pixelated from './pages/projects/pixelated'
import Boilerplates from './pages/projects/boilerplates'
import Bloc from './pages/projects/bloc'
import Directions from './pages/projects/directions'
import Dashboard from './pages/projects/dashboard'
import EmergencyUniversity from './pages/projects/emergency-university'
import MassNotification from './pages/projects/mass-notification'
import PortfolioPage from './pages/projects/portfolio'
import Error from './pages/error'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/projects/' component={Portfolio} />
              <Route path='/projects/tic-tac-toe' component={Tictactoe} />
              <Route path='/projects/simon' component={Simon} />
              <Route path='/projects/markdown-editor' component={Markdown} />
              <Route path='/projects/pixelated' component={Pixelated} />
              <Route path='/projects/boilerplates' component={Boilerplates} />
              <Route path='/projects/bloc' component={Bloc} />
              <Route path='/projects/directions' component={Directions} />
              <Route path='/projects/dashboard' component={Dashboard} />
              <Route
                path='/projects/emergency-university'
                component={EmergencyUniversity}
              />
              <Route
                path='/projects/mass-notification'
                component={MassNotification}
              />
              <Route path='/projects/portfolio' component={PortfolioPage} />
              <Route
                render={function () {
                  return <Error />
                }}
              />
            </Switch>
          </Layout>
        </ScrollToTop>
      </BrowserRouter>
    )
  }
}
