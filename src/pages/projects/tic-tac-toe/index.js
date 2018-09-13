import React, { Component } from 'react'
import './tictactoe.css'
import ContentSection from '../../../components/content-section/ContentSection'

const TIE = 'The game was a draw!'
const PLAYER = 'You won the game!'
const COMPUTER = 'The computer won the game!'
const MAX = 10
const MIN = -10

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
      moveCounter: 0,
      minMaxTurnCount: 0
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

  minimax (board, player) {
    let bestScore = -10
    let currScore = 0
    let moves = this.getAvailableMoves(board)
    const marker = this.state.selected === 'X' ? 'O' : 'X'
    const opponent = this.state.selected
    let turnCount = this.state.minMaxTurnCount

    // Base case for finding leaf nodes
    if (turnCount <= 0 || this.checkWinCondition() || !moves) return this.evaluate(board)

    // Maximize
    if (player === marker) {
      bestScore = MIN
      for (let move in moves) {
        let newBoard = [[...board[0]], [...board[1]], [...board[2]]]
        this.makeMove(newBoard, marker, moves[move])
        currScore = this.minimax(newBoard, opponent)
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
        let newBoard = [[...board[0]], [...board[1]], [...board[2]]]
        this.makeMove(newBoard, opponent, moves[move])
        currScore = this.minimax(newBoard, marker)
        if (currScore < bestScore) {
          bestScore = currScore
        }
      }
      return bestScore
    }
  }

  makeMove (newBoard, player, point) {
    let row = parseInt(point[0], 10)
    let col = parseInt(point[1], 10)
    newBoard[row][col] = player
    // let turnCount = this.state.moveCounter
    // turnCount++

    this.setState((prevState) => {
      return { minMaxTurnCount: prevState.turnCount++ }
    })

    return newBoard
  }

  getAvailableMoves (board) {
    let moves = []

    for (let row in board) {
      for (let col in board[row]) {
        if (board[row][col] === '') moves.push([row, col])
      }
    }

    return moves
  }

  getBestMove () {
    let board = [[...this.state.board[0]], [...this.state.board[1]], [...this.state.board[2]]]
    let bestScore = MIN
    let currScore
    let bestMove = null
    let moves = this.getAvailableMoves(board)
    let corners = [[0, 0], [0, 2], [2, 0], [2, 2]]
    let turnCount = this.state.minMaxTurnCount
    const marker = this.state.selected === 'X' ? 'O' : 'X'
    const opponent = this.state.selected
    let newBoard = [[...board[0]], [...board[1]], [...board[2]]]

    console.log('called getBestMove')

    // Prunes a few options for the first few states
    if (turnCount === 0) return [1, 1]
    else if (turnCount === 1 && board[1][1] === '') return [1, 1]
    else if (turnCount === 1) return corners[Math.floor(Math.random() * 4)]

    console.log('proceeding to for loop, getBestMove')
    for (let move in moves) {
      // let newBoard = [[...board[0]], [...board[1]], [...board[2]]]
      newBoard = this.makeMove(newBoard, marker, moves[move])
      currScore = this.minimax(newBoard, opponent)

      console.log(newBoard)
      console.log('currScore: ', currScore)
      console.log('bestScore: ', bestScore)

      if (currScore > bestScore) {
        bestScore = currScore
        bestMove = moves[move]
      }
    }
    console.log('bestMove: ', bestMove)
    return bestMove
  }

  evaluate (board) {
    let score = 0

    score += this.evaluateLine(board, 0, 0, 0, 1, 0, 2) // row 0
    score += this.evaluateLine(board, 1, 0, 1, 1, 1, 2) // row 1
    score += this.evaluateLine(board, 2, 0, 2, 1, 2, 2) // row 2
    score += this.evaluateLine(board, 0, 0, 1, 0, 2, 0) // col 0
    score += this.evaluateLine(board, 0, 1, 1, 1, 2, 1) // col 1
    score += this.evaluateLine(board, 0, 2, 1, 2, 2, 2) // col 2
    score += this.evaluateLine(board, 0, 0, 1, 1, 2, 2) // diagonal
    score += this.evaluateLine(board, 0, 2, 1, 1, 2, 0) // alternate diagonal

    return score
  }

  evaluateLine (board, r1, c1, r2, c2, r3, c3) {
    let score = 0
    const marker = this.state.selected === 'X' ? 'O' : 'X'
    const opponent = this.state.selected

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

  AI () {
    // const state = { ...this.state }
    const marker = this.state.selected === 'X' ? 'O' : 'X'
    // const opponent = state.selected
    // const MAX = 10
    // const MIN = -10
    // let turnCount = state.moveCounter
    let board = [[...this.state.board[0]], [...this.state.board[1]], [...this.state.board[2]]]
    let move
    this.setState({
      minMaxTurnCount: this.state.moveCounter
    }, () => {
      move = this.getBestMove()

      try {
        // console.log('move[0]: ', parseInt(move[0]))
        // console.log('move[1]: ', parseInt(move[0]))
        console.log('move: ', move)
        board[parseInt(move[0], 10)][parseInt(move[1], 10)] = marker
        // console.log(parseInt(move, 10))
        // console.log(move[0])
        // console.log(move[1])
      } catch (error) {
        console.log(error)
      }

      this.setState({
        board: board,
        playerTurn: true
      }, () => this.checkWinCondition())
    })
    // let move = this.getBestMove()

    // function minimax (board, player) {
    //   let bestScore = -10
    //   let currScore = 0
    //   let moves = getAvailableMoves(board)
    //
    //   // Base case for finding leaf nodes
    //   if (turnCount <= 0 || this.checkWinCondition() || !moves) return evaluate(board)
    //
    //   // Maximize
    //   if (player === marker) {
    //     bestScore = MIN
    //     for (let move in moves) {
    //       let newBoard = [[...board[0]], [...board[1]], [...board[2]]]
    //       makeMove(newBoard, marker, moves[move])
    //       currScore = minimax(newBoard, opponent)
    //       if (currScore > bestScore) {
    //         bestScore = currScore
    //       }
    //     }
    //     return bestScore
    //   }
    //
    //   // Minimize
    //   if (player === opponent) {
    //     bestScore = MAX
    //     for (let move in moves) {
    //       let newBoard = [[...board[0]], [...board[1]], [...board[2]]]
    //       makeMove(newBoard, opponent, moves[move])
    //       currScore = minimax(newBoard, marker)
    //       if (currScore < bestScore) {
    //         bestScore = currScore
    //       }
    //     }
    //     return bestScore
    //   }
    // }

    // function makeMove (newBoard, player, point) {
    //   var row = parseInt(point[0], 10)
    //   var col = parseInt(point[1], 10)
    //   newBoard[row][col] = player
    //   turnCount++
    //
    //   return newBoard
    // }

    // function getAvailableMoves (board) {
    //   var moves = []
    //
    //   for (var row in board) {
    //     for (var col in board[row]) {
    //       if (board[row][col] === '') moves.push([row, col])
    //     }
    //   }
    //
    //   return moves
    // }

    // Gets the best move for this board configuration
    // function getBestMove (board) {
    //   let bestScore = MIN
    //   let currScore
    //   let bestMove = null
    //   let moves = getAvailableMoves(board)
    //   let corners = [[0, 0], [0, 2], [2, 0], [2, 2]]
    //
    //   // Prunes a few options for the first few states
    //   if (turnCount === 0) return [1, 1]
    //   else if (turnCount === 1 && board[1][1] === '') return [1, 1]
    //   else if (turnCount === 1) return corners[Math.floor(Math.random() * 4)]
    //
    //   for (let move in moves) {
    //     let newBoard = [[...board[0]], [...board[1]], [...board[2]]]
    //     newBoard = makeMove(newBoard, marker, moves[move])
    //     currScore = minimax(newBoard, opponent)
    //
    //     if (currScore > bestScore) {
    //       bestScore = currScore
    //       bestMove = moves[move]
    //     }
    //   }
    //   console.log('bestMove: ', bestMove)
    //   return bestMove
    // }

    // Evaluates the score for the board passed by checking each line
    // function evaluate (board) {
    //   let score = 0
    //
    //   score += evaluateLine(board, 0, 0, 0, 1, 0, 2)  // row 0
    //   score += evaluateLine(board, 1, 0, 1, 1, 1, 2)  // row 1
    //   score += evaluateLine(board, 2, 0, 2, 1, 2, 2)  // row 2
    //   score += evaluateLine(board, 0, 0, 1, 0, 2, 0)  // col 0
    //   score += evaluateLine(board, 0, 1, 1, 1, 2, 1)  // col 1
    //   score += evaluateLine(board, 0, 2, 1, 2, 2, 2)  // col 2
    //   score += evaluateLine(board, 0, 0, 1, 1, 2, 2)  // diagonal
    //   score += evaluateLine(board, 0, 2, 1, 1, 2, 0)  // alternate diagonal
    //
    //   return score
    // }

    // Scores the line by checking each cell for our marker, 1 point for 1, 10 point for 2, 100 for 3, opposite for opponent marker
    // function evaluateLine (board, r1, c1, r2, c2, r3, c3) {
    //   let score = 0
    //
    //   // First cell
    //   if (board.gamestate[r1][c1] === marker) score = 1
    //   else if (board.gamestate[r1][c1] === opponent) score = -1
    //
    //   // Second cell
    //   if (board.gamestate[r2][c2] === marker) {
    //     if (score === 1) score = 10
    //     else if (score === -1) return 0
    //     else score = 1
    //   } else if (board.gamestate[r2][c2] === opponent) {
    //     if (score === -1) score = -10
    //     else if (score === 1) return 0
    //     else score = -1
    //   }
    //
    //   // Final cell
    //   if (board.gamestate[r3][c3] === marker) {
    //     if (score > 1) score *= 10
    //     else if (score < 0) return 0
    //     else score = 1
    //   } else if (board.gamestate[r3][c3] === opponent) {
    //     if (score < 0) score *= 10
    //     else if (score > 1) return 0
    //     else score = -1
    //   }
    //   return score
    // }

    // try {
    //   // console.log('move[0]: ', parseInt(move[0]))
    //   // console.log('move[1]: ', parseInt(move[0]))
    //   board[parseInt(move[0], 10)][parseInt(move[1], 10)] = marker
    //   // console.log(parseInt(move, 10))
    //   // console.log(move[0])
    //   // console.log(move[1])
    // } catch (error) {
    //   console.log(error)
    // }

    // this.setState({
    //   board: board,
    //   playerTurn: true
    // }, () => this.checkWinCondition())
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
          moveCounter++
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
        moveCounter: 0,
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
    if (this.state.moveCounter >= 9 && !winner) {
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
            <table className={`tic-tac-toe-gameboard${this.state.selected ? ' active' : ''}`} onClick={this.handleClick.bind(this)}>
              <tbody>
                <tr>
                  <td id='00' className={this.state.board[0][0] !== '' ? 'selected' : ''}>
                    {this.state.board[0][0]}
                  </td>
                  <td id='01' className={this.state.board[0][1] !== '' ? 'selected' : ''}>
                    {this.state.board[0][1]}
                  </td>
                  <td id='02' className={this.state.board[0][2] !== '' ? 'selected' : ''}>
                    {this.state.board[0][2]}
                  </td>
                </tr>
                <tr>
                  <td id='10' className={this.state.board[1][0] !== '' ? 'selected' : ''}>
                    {this.state.board[1][0]}
                  </td>
                  <td id='11' className={this.state.board[1][1] !== '' ? 'selected' : ''}>
                    {this.state.board[1][1]}
                  </td>
                  <td id='12' className={this.state.board[1][2] !== '' ? 'selected' : ''}>
                    {this.state.board[1][2]}
                  </td>
                </tr>
                <tr>
                  <td id='20' className={this.state.board[2][0] !== '' ? 'selected' : ''}>
                    {this.state.board[2][0]}
                  </td>
                  <td id='21' className={this.state.board[2][1] !== '' ? 'selected' : ''}>
                    {this.state.board[2][1]}
                  </td>
                  <td id='22' className={this.state.board[2][2] !== '' ? 'selected' : ''}>
                    {this.state.board[2][2]}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ContentSection>
      </div>
    )
  }
}
