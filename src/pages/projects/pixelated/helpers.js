// import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as CONSTANTS from './constants'

export function getWidth (spriteId) {
  return ReactDOM.findDOMNode(
    document.getElementById(spriteId)
  ).getBoundingClientRect().width
}

export function getHeight (spriteId) {
  return ReactDOM.findDOMNode(
    document.getElementById(spriteId)
  ).getBoundingClientRect().height
}

export function getStyle (spriteId) {
  return ReactDOM.findDOMNode(document.getElementById(spriteId)).style
}

export function handleKeyDown (e, ...movementQueue) {
  let [...queue] = movementQueue

  let keyIndex = Object.values(CONSTANTS.KEY_VALUES).indexOf(e.keyCode)

  if (e.keyCode === CONSTANTS.UP_ARROW || e.keyCode === CONSTANTS.DOWN_ARROW) {
    e.preventDefault()
  }

  if (keyIndex > -1) {
    e.preventDefault()

    let movement = Object.keys(CONSTANTS.KEY_VALUES)[keyIndex]
    let ableToPushToQueue = true

    for (let i in queue) {
      if (queue[i] === movement) {
        ableToPushToQueue = false
      }
    }

    if (ableToPushToQueue) {
      if (movement === 'SPACE_BAR') {
        queue.unshift(movement)
      } else {
        queue.push(movement)
      }
    }

    return queue
  }
}

export function handleKeyUp (e, ...movementQueue) {
  let [...queue] = movementQueue

  let keyIndex = Object.values(CONSTANTS.KEY_VALUES).indexOf(e.keyCode)

  if (keyIndex > -1) {
    e.preventDefault()

    let movement = Object.keys(CONSTANTS.KEY_VALUES)[keyIndex]

    for (let i in queue) {
      if (queue[i] === movement) {
        queue.splice(i, 1)
      }
    }

    return queue
  }
}
