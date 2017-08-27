import React, { Component } from 'react'
import './content-section.css'

export default class ContentSection extends Component {
  render () {
    return (
      <div className='content-section'>
        {this.props.children}
      </div>
    )
  }
}
