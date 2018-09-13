import React, { Component } from 'react'
import './header.css'
import logo from './logo.svg'
import { withRouter } from 'react-router'

const Link = require('react-router-dom').Link
const NavLink = require('react-router-dom').NavLink

export class Header extends Component {
  constructor () {
    super()

    this.state = {
      logoHeight: 40,
      headerBackgroundOpacity: 1
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)

    this.setHeaderStyle()
  }

  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setHeaderStyle()
    }
  }

  setHeaderStyle () {
    let logoHeight = this.state.logoHeight
    let headerBackgroundOpacity = this.state.headerBackgroundOpacity
    // If home, then set logo height and background opacity to default
    if (this.props.location.pathname === '/') {
      logoHeight = 60
      headerBackgroundOpacity = 0
    } else {
      logoHeight = 40
      headerBackgroundOpacity = 1
    }

    this.setState({
      logoHeight: logoHeight,
      headerBackgroundOpacity: headerBackgroundOpacity
    })
  }

  handleScroll () {
    if (this.props.location.pathname !== '/') return

    let scrolledFromTop = window.pageYOffset
    let headerBackgroundOpacity = this.state.headerBackgroundOpacity
    let logoHeight = this.state.logoHeight

    if (scrolledFromTop > 0 && scrolledFromTop < 200) {
      headerBackgroundOpacity = scrolledFromTop / 200
      logoHeight = 60 - scrolledFromTop / 10
    } else if (scrolledFromTop < 1) {
      headerBackgroundOpacity = 0
      logoHeight = 60
    } else {
      headerBackgroundOpacity = 1
      logoHeight = 40
    }

    this.setState({
      headerBackgroundOpacity: headerBackgroundOpacity,
      logoHeight: logoHeight
    })
  }

  render () {
    let pathArray = window.location.pathname.split('/')
    let project = pathArray.length > 2 ? pathArray[pathArray.length - 1] : null

    return (
      <div
        className='header-wrapper'
        style={{
          backgroundColor: `rgba(13, 115, 119, ${
            this.state.headerBackgroundOpacity
          })`,
          borderBottom: `1px solid rgba(34, 40, 49, ${
            this.state.headerBackgroundOpacity
          })`
        }}
      >
        <nav className='header'>
          <Link className='active' to='/'>
            <img
              src={logo}
              alt='Andrew Johnston'
              className='logo'
              style={{ height: `${this.state.logoHeight}px` }}
            />
          </Link>

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
            {project ? (
              <li>
                <NavLink
                  exact
                  activeClassName='active'
                  to={`/projects/${project}`}
                >
                  {project}
                </NavLink>
              </li>
            ) : (
              ''
            )}
          </ul>
        </nav>
      </div>
    )
  }
}

export default withRouter(Header)
