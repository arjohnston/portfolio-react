import React, { Component } from 'react'
import Projects from './projects'

export default class Error extends Component {
  render () {
    return (
      <div className='error-wrapper'>
        <div className='pane-600 center' style={{ paddingTop: '72px' }}>
          <h1>
            Whoops, looks like the page doesn't exist. Try visiting one of the
            projects below.
          </h1>
        </div>

        <Projects />
      </div>
    )
  }
}
