import React, { Component } from 'react'
import './simon.css'
import Settings from './Settings'
import ContentSection from '../../../components/content-section/ContentSection'

export default class Simon extends Component {
  constructor (props) {
    super(props)
    this.state = {
      settingsMenuOpen: false,
      gameDifficulty: 2,
      intervalSpeed: 200,
      gamePieceActiveSpeed: 200,
      strictMode: false,
      sound: true,
      gameInProgress: false,
      boardSpaceActive: null,
      arrayOfMoves: [],
      playerArrayOfMoves: [],
      winCondition: 20
    }
  }

  setDifficulty (input) {
    let difficultySetting
    let difficultySpeed
    let gamePieceActiveSpeed

    if (input < 1 || input > 3) {
      throw new Error('Invalid difficulty setting')
    } else {
      difficultySetting = input
    }

    difficultySpeed = difficultySetting * 200
    gamePieceActiveSpeed = difficultySpeed

    this.setState({
      gameDifficulty: difficultySetting,
      difficultySpeed: difficultySpeed,
      gamePieceActiveSpeed: gamePieceActiveSpeed
    })
  }

  toggleStrictMode () {
    this.setState({
      strictMode: !this.state.strictMode
    })
  }

  toggleSound () {
    this.setState({
      sound: !this.state.sound
    })
  }

  toggleMenu () {
    this.setState({
      settingsMenuOpen: !this.state.settingsMenuOpen,
      gameInProgress: false
    })
  }

  toggleStart () {
    this.setState({
      gameInProgress: !this.state.gameInProgress,
      arrayOfMoves: []
    })
  }

  resetGame () {
    this.setState({
      gameInProgress: true,
      arrayOfMoves: []
    })
  }

  // change name to reflect user and computer functionality
  toggleGameboardPiece (location) {
    if (this.state.gameInProgress) {
      let callback

      callback = () => {
        this.setState({
          boardSpaceActive: null
        })
        delete this.animationEndCallback
      }

      this.setState({
        boardSpaceActive: location
      }, function () {
        this.animationEndCallback = setTimeout(callback, this.state.gamePieceActiveSpeed)
      })
    }
  }

  simonAI () {
    let moveCounter = 0
    let ranNum = Math.floor(Math.random() * 4 + 1)

    this.state.arrayOfMoves.push(ranNum)

    let computerInterval = setInterval(function () {
      this.toggleGameboardPiece(this.state.arrayOfMoves[moveCounter])

      moveCounter++

      if (moveCounter === this.state.arrayOfMoves.length) {
        clearInterval(computerInterval)
      }
    }, this.state.intervalSpeed)

    // should win condition variable be in settings?
    if (moveCounter === this.state.winCondition) {
      console.log('won!')
    }
  }

  playerMove (e) {
    let arrayOfMoves = [ ...this.state.arrayOfMoves ]
    let playerArrayOfMoves = [ ...this.state.playerArrayOfMoves ]

    if (arrayOfMoves.length <= playerArrayOfMoves.length) {
      // disable player moves, enable computer moves
    }

    playerArrayOfMoves.push(e)

    if (e === arrayOfMoves[playerArrayOfMoves.length - 1]) {
      // continue
      console.log('continue: ', arrayOfMoves)
    } else {
      if (this.state.strictMode) this.resetGame()

      // else disable player moves && start AI without random # add
    }

    this.setState({
      playerArrayOfMoves: playerArrayOfMoves
    })
  }

  render () {
    const Game = () =>
      <div
        className={`simon-game ${!this.state.settingsMenuOpen ? 'is-open' : ''}`}>
        <div
          className='settings-button'
          onClick={this.toggleMenu.bind(this)}
        >
          Settings
        </div>
        <div
          className='settings-button'
          onClick={this.toggleStart.bind(this)}
        >
          {this.state.gameInProgress ? 'Reset' : 'Start'}
        </div>
        <div>
          <svg className='simon-gameboard-wrapper'>
            <path
              onClick={this.playerMove.bind(this, 1)}
              className={`simon-gameboard-top-left ${this.state.boardSpaceActive === 1 ? 'simon-boardpiece-active' : ''}`}
              d='M0.6,156.1h99.3c1.9-30.5,26.3-54.9,56.8-56.8V0C71.4,2,2.6,70.8,0.6,156.1z'
              // include gaussian blur for these. How to remove blur if it's clicked?
            />
            <path
              onClick={this.playerMove.bind(this, 2)}
              className={`simon-gameboard-top-right ${this.state.boardSpaceActive === 2 ? 'simon-boardpiece-active' : ''}`}
              d='M221,156.1h99.3C318.4,70.8,249.6,2,164.3,0v99.3C194.8,101.2,219.2,125.6,221,156.1z'
            />
            <path
              onClick={this.playerMove.bind(this, 3)}
              className={`simon-gameboard-bottom-left ${this.state.boardSpaceActive === 3 ? 'simon-boardpiece-active' : ''}`}
              d='M99.9,163.7H0.6c2,85.3,70.8,154.1,156.1,156v-99.3C126.2,218.5,101.8,194.2,99.9,163.7z'
            />
            <path
              onClick={this.playerMove.bind(this, 4)}
              className={`simon-gameboard-bottom-right ${this.state.boardSpaceActive === 4 ? 'simon-boardpiece-active' : ''}`}
              d='M164.3,220.4v99.3c85.3-2,154.1-70.7,156.1-156H221C219.2,194.2,194.8,218.5,164.3,220.4z'
            />
            <circle className='simon-gameboard-center-circle' cx='160.6' cy='159.7' r='54.8' />
          </svg>
          <span className='simon-scoreboard'>{this.state.gameInProgress ? this.state.arrayOfMoves.length : '- -'}</span>
        </div>
      </div>

    return (
      <div>
        <ContentSection>
          <div className='pane-800 center'>
            <h3 className='game-title'>simon says</h3>
            <Game />
            <Settings
              menuOpen={this.state.settingsMenuOpen}
              toggleMenu={this.toggleMenu.bind(this)}
              toggleSound={this.toggleSound.bind(this)}
              toggleStrictMode={this.toggleStrictMode.bind(this)}
              setDifficulty={this.setDifficulty.bind(this)}
              difficulty={this.state.gameDifficulty}
              strictMode={this.state.strictMode}
              sound={this.state.sound}
            />
          </div>
        </ContentSection>
      </div>
    )
  }
}
