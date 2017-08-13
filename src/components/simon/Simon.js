import React, { Component } from 'react'
import './simon.css'
import Header from '../header/Header'

class Simon extends Component {
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
        <Header title='simon' />
        <h2>Settings</h2>
      </div>
    )
  }
}

export default Simon
