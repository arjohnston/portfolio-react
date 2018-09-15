import React, { Component } from 'react'

import SocialButtons from '../SocialButtons'
import './style.css'

export default class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <a href='mailto:arjohnston3@gmail.com'>arjohnston3@gmail.com</a>

        <div className='social'>
          <SocialButtons />
        </div>
      </div>
    )
  }
}
