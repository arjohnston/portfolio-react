import React, { Component } from 'react'

import Header from '../header/Header'
import Footer from '../footer/Footer'
import './layout.css'

export default class Layout extends Component {
  render () {
    return (
      <div className='layout-wrapper'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
