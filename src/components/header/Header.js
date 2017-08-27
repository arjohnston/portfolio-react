import React, { Component } from 'react'
import './header.css'
import Logo from './Logo'

var Link = require('react-router-dom').Link
var NavLink = require('react-router-dom').NavLink

export default class Header extends Component {
  render () {
    return (
      <div className='header-wrapper'>
        <nav className='header'>
          <div className='logo'>
            <Link className='active' to='/'>
              <Logo />
            </Link>
          </div>

          <ul className='nav'>
            <li>
              <NavLink exact activeClassName='active' to='/'>
                arjohnston.io
              </NavLink>
            </li>
            <li>&nbsp;/&nbsp;</li>
            <li>
              <NavLink activeClassName='active' to='/portfolio'>
                portfolio
              </NavLink>
            </li>
            <li>&nbsp;/&nbsp;</li>
          </ul>
        </nav>
      </div>
    )
  }
}
