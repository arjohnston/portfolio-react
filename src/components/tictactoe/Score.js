import React, { Component } from 'react';
// import './score.css';

class Score extends Component {
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
        <h2>Score</h2>
      </div>
    );
  }
}

export default Score;
