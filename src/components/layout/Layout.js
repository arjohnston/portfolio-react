import React, { Component } from 'react'
import './layout.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'

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
