import React, { Component } from 'react'
import './style.css'

export default class Settings extends Component {
  render () {
    const Settings = () => (
      <div
        className={`simon-settings-menu ${
          this.props.menuOpen ? 'is-open' : ''
        }`}
      >
        <div className='settings-menu-option'>
          <span>Difficulty</span>
          <div className='settings-menu-selection-wrapper'>
            <span
              className={`settings-menu-selection simon-easy ${
                this.props.difficulty === 1 ? 'setting-selected' : ''
              }`}
              onClick={() => this.props.setDifficulty(1)}
            >
              SLOW
            </span>
            <span
              className={`settings-menu-selection simon-medium ${
                this.props.difficulty === 2 ? 'setting-selected' : ''
              }`}
              onClick={() => this.props.setDifficulty(2)}
            >
              NORMAL
            </span>
            <span
              className={`settings-menu-selection simon-hard ${
                this.props.difficulty === 3 ? 'setting-selected' : ''
              }`}
              onClick={() => this.props.setDifficulty(3)}
            >
              FAST
            </span>
          </div>
        </div>
        <div className='settings-menu-option'>
          <span>Strict Mode</span>
          <div className='settings-menu-selection-wrapper'>
            <span
              className={`settings-menu-selection settings-menu-selection-highlight ${
                this.props.strictMode ? 'setting-selected' : ''
              }`}
              onClick={this.props.toggleStrictMode}
            >
              ON
            </span>
            <span
              className={`settings-menu-selection ${
                !this.props.strictMode ? 'setting-selected' : ''
              }`}
              onClick={this.props.toggleStrictMode}
            >
              OFF
            </span>
          </div>
        </div>
        <div className='settings-menu-option'>
          <span>Sound</span>
          <div className='settings-menu-selection-wrapper'>
            <span
              className={`settings-menu-selection settings-menu-selection-highlight ${
                this.props.sound ? 'setting-selected' : ''
              }`}
              onClick={this.props.toggleSound}
            >
              ON
            </span>
            <span
              className={`settings-menu-selection ${
                !this.props.sound ? 'setting-selected' : ''
              }`}
              onClick={this.props.toggleSound}
            >
              OFF
            </span>
          </div>
        </div>
        <div className='settings-button close' onClick={this.props.toggleMenu}>
          Return to Game
        </div>
      </div>
    )

    return <Settings />
  }
}
