import React, { Component } from 'react';
// import './settings.css';

class Settings extends Component {
  constructor(props) {
    super(props)

    this.setState({
      playerScore: 0,
      computerScore: 0
    })
  }

  render () {
    return (
      <div>
        <h2>Settings</h2>
      </div>
    );
  }
}

export default Settings;
