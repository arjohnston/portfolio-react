import React, { Component } from 'react'
import './error.css'
import ContentSection from '../content-section/ContentSection'

export default class Error extends Component {
  render () {
    return (
      <div className='error-wrapper'>
        <ContentSection>
          <div className='pane-600 center'>
            <h1>
              Whoops, looks like the page doesn't exist
            </h1>
          </div>
        </ContentSection>
      </div>
    )
  }
}
