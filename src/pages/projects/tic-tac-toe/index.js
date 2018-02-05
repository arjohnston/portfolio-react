import React, { Component } from 'react'
import './tictactoe.css'
import ContentSection from '../../../components/content-section/ContentSection'

const TIE = 'The game was a draw!'
const PLAYER = 'You won the game!'
const COMPUTER = 'The computer won the game!'

export default class Tictactoe extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: null,
      opponent: null,
      result: '',
      playerTurn: false,
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      moveCounter: 9
    }
  }

  selection (selection) {
    this.setState({
      selected: selection,
      opponent: selection === 'X' ? 'O' : 'X',
      playerTurn: selection === 'X'
    }, () => {
      if (!this.state.playerTurn) this.AI()
    })
  }

  AI () {
    const marker = this.state.selected === 'X' ? 'O' : 'X'
    const opponent = this.state.selected
    const MAX = 10
    const MIN = -10
    let state = { ...this.state }
    let turnCount = 9 - this.state.moveCounter
    let move = getBestMove(state.board)

    function minimax (board, player) {
      let bestScore = -10
      let currScore = 0
      let moves = getAvailableMoves(state.board)

      // Base case for finding leaf nodes
      if (this.state.moveCount <= 0 || this.checkWinCondition() || !moves) return evaluate(board)

      // Maximize
      if (player === marker) {
        bestScore = MIN
        for (let move in moves) {
          let newBoard = state.board
          makeMove(newBoard, marker, moves[move])
          currScore = minimax(newBoard, opponent)
          if (currScore > bestScore) {
            bestScore = currScore
          }
        }
        return bestScore
      }

      // Minimize
      if (player === opponent) {
        bestScore = MAX
        for (let move in moves) {
          let newBoard = state.board
          makeMove(newBoard, opponent, moves[move])
          currScore = minimax(newBoard, marker)
          if (currScore < bestScore) {
            bestScore = currScore
          }
        }
        return bestScore
      }
    }

    function makeMove (newBoard, player, point) {
      var row = parseInt(point[0], 10)
      var col = parseInt(point[1], 10)
      newBoard[row][col] = player
      turnCount++
    }

    function getAvailableMoves (board) {
      var moves = []
      // let board = state.board

      for (var row in board) {
        for (var col in board[row]) {
          if (board[row][col] === '') moves.push([row, col])
        }
      }

      return moves
    }

     // Gets the best move for this board configuration
    function getBestMove (board) {
      let bestScore = MIN
      let currScore
      let bestMove = null
      let moves = getAvailableMoves()
      let corners = [[0, 0], [0, 2], [2, 0], [2, 2]]

      // Prunes a few options for the first few states
      if (turnCount === 0) return [1, 1]
      else if (turnCount === 1 && board[1][1] === '') return [1, 1]
      else if (turnCount === 1) return corners[Math.floor(Math.random() * 4)]

      for (let move in moves) {
        let newBoard = state.board
        makeMove(newBoard, marker, moves[move])
        currScore = minimax(newBoard, opponent)

        if (currScore > bestScore) {
          bestScore = currScore
          bestMove = moves[move]
        }
      }

      return bestMove
    }

    // Evaluates the score for the board passed by checking each line
    function evaluate (board) {
      let score = 0

      score += evaluateLine(board, 0, 0, 0, 1, 0, 2)  // row 0
      score += evaluateLine(board, 1, 0, 1, 1, 1, 2)  // row 1
      score += evaluateLine(board, 2, 0, 2, 1, 2, 2)  // row 2
      score += evaluateLine(board, 0, 0, 1, 0, 2, 0)  // col 0
      score += evaluateLine(board, 0, 1, 1, 1, 2, 1)  // col 1
      score += evaluateLine(board, 0, 2, 1, 2, 2, 2)  // col 2
      score += evaluateLine(board, 0, 0, 1, 1, 2, 2)  // diagonal
      score += evaluateLine(board, 0, 2, 1, 1, 2, 0)  // alternate diagonal

      return score
    }

    // Scores the line by checking each cell for our marker, 1 point for 1, 10 point for 2, 100 for 3, opposite for opponent marker
    function evaluateLine (board, r1, c1, r2, c2, r3, c3) {
      let score = 0

      // First cell
      if (board.gamestate[r1][c1] === marker) score = 1
      else if (board.gamestate[r1][c1] === opponent) score = -1

      // Second cell
      if (board.gamestate[r2][c2] === marker) {
        if (score === 1) score = 10
        else if (score === -1) return 0
        else score = 1
      } else if (board.gamestate[r2][c2] === opponent) {
        if (score === -1) score = -10
        else if (score === 1) return 0
        else score = -1
      }

      // Final cell
      if (board.gamestate[r3][c3] === marker) {
        if (score > 1) score *= 10
        else if (score < 0) return 0
        else score = 1
      } else if (board.gamestate[r3][c3] === opponent) {
        if (score < 0) score *= 10
        else if (score > 1) return 0
        else score = -1
      }
      return score
    }

    try {
      state.board[move[0]][move[1]] = marker
    } catch (error) {
      console.log(error)
    }

    this.setState({
      board: state.board,
      playerTurn: true
    }, () => this.checkWinCondition())
  }

  handleClick (e) {
    if (this.state.playerTurn) {
      let board = [ ...this.state.board ]
      let row = parseInt(e.target.id[0], 10)
      let col = parseInt(e.target.id[1], 10)
      let moveCounter = this.state.moveCounter

      if (!isNaN(row) && !isNaN(col)) {
        if (board[row][col] === '') {
          board[row][col] = this.state.selected
          moveCounter--
        }
      }

      this.setState({
        board: board,
        playerTurn: false,
        moveCounter: moveCounter
      }, () => this.checkWinCondition())
    }
  }

  resetGame (e) {
    let callback = () => {
      this.setState({
        result: '',
        board: [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ],
        moveCounter: 9,
        playerTurn: this.state.selected === 'X'
      }, () => {
        if (!this.state.playerTurn) this.AI()
      })

      delete this.gameEndCallback
    }

    this.setState({
      result: e.winner
    }, () => {
      this.gameEndCallback = setTimeout(callback, 2000)
    })
  }

  checkWinCondition () {
    let board = [ ...this.state.board ]
    let winner = null

    // Check diagonal
    if (board[1][1] !== '' &&
      ((board[0][0] === board[1][1] &&
        board[2][2] === board[1][1]) || (board[0][2] === board[1][1] &&
          board[2][0] === board[1][1]))) {
      winner = board[1][1]
    } else {
      // Check horizontal
      for (let row in board) {
        if (board[row][0] !== '' &&
        board[row][0] === board[row][1] &&
        board[row][2] === board[row][1]) {
          winner = board[row][0]
        }
      }
      // Check vertical
      for (let col in board) {
        if (board[0][col] !== '' &&
        board[0][col] === board[1][col] &&
        board[1][col] === board[2][col]) {
          winner = board[0][col]
        }
      }
    }

    if (winner) {
      if (winner === this.state.selected) {
        this.resetGame({ winner: PLAYER })
      } else {
        this.resetGame({ winner: COMPUTER })
      }
      return
    }
    if (this.state.moveCounter <= 0 && !winner) {
      this.resetGame({ winner: TIE })
      return
    }
    if (!this.state.playerTurn) this.AI()
  }

  render () {
    return (
      <div>
        <ContentSection>
          <div className='pane-800 center'>
            <h3>Tic-Tac-Toe</h3>
            <div className='selection'>
              Play as:
              <button
                onClick={this.selection.bind(this, 'X')}
                className={`
                  ${this.state.selected === null ? 'hover' : ''} ${this.state.selected === 'X' ? 'selected' : ''}
                  `}
                disabled={this.state.selected}
                >
                  X
                </button>
              <button
                onClick={this.selection.bind(this, 'O')}
                className={`
                  ${this.state.selected === null ? 'hover' : ''} ${this.state.selected === 'O' ? 'selected' : ''}
                  `}
                disabled={this.state.selected}
                >
                  O
                </button>
            </div>
            <div className='result'>{this.state.result}</div>
            <table className='tic-tac-toe-gameboard' onClick={this.handleClick.bind(this)}>
              <tbody>
                <tr>
                  <td id='00'>{this.state.board[0][0]}</td>
                  <td id='01'>{this.state.board[0][1]}</td>
                  <td id='02'>{this.state.board[0][2]}</td>
                </tr>
                <tr>
                  <td id='10'>{this.state.board[1][0]}</td>
                  <td id='11'>{this.state.board[1][1]}</td>
                  <td id='12'>{this.state.board[1][2]}</td>
                </tr>
                <tr>
                  <td id='20'>{this.state.board[2][0]}</td>
                  <td id='21'>{this.state.board[2][1]}</td>
                  <td id='22'>{this.state.board[2][2]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ContentSection>
      </div>
    )
  }
}
