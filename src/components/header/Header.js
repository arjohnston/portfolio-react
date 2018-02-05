import React, { Component } from 'react'
import './header.css'
import Logo from './Logo'

var Link = require('react-router-dom').Link
var NavLink = require('react-router-dom').NavLink

export default class Header extends Component {
  render () {
    let pathArray = window.location.pathname.split('/')
    let project = pathArray.length > 2 ? pathArray[pathArray.length - 1] : null

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
              <NavLink exact activeClassName='active' to='/projects'>
                projects
              </NavLink>
            </li>
            <li>&nbsp;/&nbsp;</li>
            {project ? <li><NavLink exact activeClassName='active' to={`/projects/${project}`}>{project}</NavLink></li> : ''}
            {project ? <li>&nbsp;/&nbsp;</li> : ''}
          </ul>
        </nav>
      </div>
    )
  }
}
