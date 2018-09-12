import React, { Component } from 'react'
import ContentSection from '../components/content-section/ContentSection'
import Projects from './projects'

export default class Error extends Component {
  render () {
    return (
      <div className='error-wrapper'>
        <ContentSection>
          <div className='pane-600 center'>
            <h1>
              Whoops, looks like the page doesn't exist. Try visiting one of the projects below.
            </h1>
          </div>

          <Projects />
        </ContentSection>
      </div>
    )
  }
}
