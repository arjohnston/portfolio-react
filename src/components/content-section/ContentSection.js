import React, { Component } from 'react'
import './content-section.css'

export default class ContentSection extends Component {
  render () {
    let classList = this.props.className ? this.props.className : ''

    return (
      <div className={`content-section ${classList}`}>
        {this.props.children}
      </div>
    )
  }
}
