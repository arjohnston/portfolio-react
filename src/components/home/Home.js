import React, { Component } from 'react'
// import Link from 'react-router-dom'
import './home.css'
import Header from '../header/Header'

var Link = require('react-router-dom').Link

class Home extends Component {
  render () {
    return (
      <div className='wrapper'>
        <Header />
        <div className='content-wrapper'>
          <Link className='project' to='/simon'>
            <img src='./assets/simon.png' alt='simon' />
            <div className='content'>
              <h2>
                Simon
              </h2>
              <p>
                Simon game description here...
              </p>
            </div>
          </Link>
          <Link className='project' to='/tictactoe'>
            <img src='./assets/tictactoe.png' alt='tic tac toe' />
            <div className='content'>
              <h2>
                Tic Tac Toe
              </h2>
              <p>
                Tic Tac Toe game description here...
              </p>
            </div>
          </Link>
          <Link className='project' to='/markdown'>
            <img src='./assets/markdown.png' alt='markdown previewer' />
            <div className='content'>
              <h2>
                Markdown Previewer
              </h2>
              <p>
                Markdown description here...
              </p>
            </div>
          </Link>
          <Link className='project' to='/mario'>
            <img src='./assets/mario.png' alt='mario' />
            <div className='content'>
              <h2>
                Mario Clone
              </h2>
              <p>
                Mario game description here...
              </p>
            </div>
          </Link>
          <Link className='project' to='/weather'>
            <img src='./assets/weather.png' alt='weather' />
            <div className='content'>
              <h2>
                Weather Machine
              </h2>
              <p>
                Weather Machine description here...
              </p>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
