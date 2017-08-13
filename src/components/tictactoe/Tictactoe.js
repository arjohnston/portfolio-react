import React, { Component } from 'react'
import './tictactoe.css'
import Header from '../header/Header'

class Tictactoe extends Component {
  constructor (props) {
    super(props)

    this.setState({
      playerScore: 0,
      computerScore: 0
    })
  }

  render () {
    return (
      <div>
        <Header title='tictactoe' />
        <h2>Settings</h2>
      </div>
    )
  }
}

export default Tictactoe
