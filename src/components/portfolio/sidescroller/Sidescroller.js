import React, { Component } from 'react'
import './sidescroller.css'
import ContentSection from '../../content-section/ContentSection'

export default class Sidescroller extends Component {
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
        <ContentSection>
          <div className='pane-800 center'>
            <h2>Coming soon...</h2>
          </div>
        </ContentSection>
      </div>
    )
  }
}
