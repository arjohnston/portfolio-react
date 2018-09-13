import React, { Component } from 'react'

import initialState from './initial-state'
import * as CONSTANTS from './constants'
import {
  // getWidth,
  getHeight,
  getStyle,
  handleKeyDown,
  handleKeyUp
} from './helpers'

import {
  // moveClouds,
  checkCollisionY,
  // playerSpriteAnimation,
  movePlayerSpriteLeft,
  movePlayerSpriteRight,
  movePlayerSpriteUp,
  movePlayerSpriteDown,
  centerCameraX
} from './movement'

import './pixelated.css'
import ContentSection from '../../../components/content-section/ContentSection'

// full screen game eventually
// game name = pixels
// change coins to pixels
// collect pixels & that calculates score. At end of
// game, paint a picture of the pixels collected. Have them animate from the
// score counter

// finish collide
// make a tilemap for the map layout
// make sure colliders work for all type of objects:
// coins, disappearable
// bricks, hitable w/ health?
// Enemies that eat you when collided on the side, killed when collided on top
// ground
// boxes
// Score system print at the end with coins x time formula?

// falling inertia
// move backwards while falling
// when not movinvg & jump, animation should be jumping
// make sprites into objects that's mapped through for initialize

// get check collision to work
// move out collision code from spritemovement
// player sprite jumps twice if space bar held

// Once finished with above & implement day 1 stuff, share on FCC for feedback / recommendations for making faster

export default class Sidescroller extends Component {
  constructor (props) {
    super(props)

    this.state = initialState
  }

  componentDidMount () {
    this.loadGame()
  }

  componentWillMount () {
    document.addEventListener(
      'keydown',
      function (e) {
        this.keyDown(e)
      }.bind(this)
    )

    document.addEventListener(
      'keyup',
      function (e) {
        this.keyUp(e)
      }.bind(this)
    )

    this.clearGameLoopInterval()
    this.clearGameTimeInterval()
  }

  componentWillUnmount () {
    document.removeEventListener(
      'keydown',
      function (e) {
        this.keyDown(e)
      }.bind(this)
    )

    document.removeEventListener(
      'keyup',
      function (e) {
        this.keyUp(e)
      }.bind(this)
    )
  }

  keyDown (e) {
    let newQueue = handleKeyDown(e, ...this.state.movementQueue)
    let spaceBarHeld = null

    if (newQueue) {
      for (let i in newQueue) {
        if (newQueue[i] === 'SPACE_BAR') {
          spaceBarHeld = true
        }
      }

      this.setState({
        movementQueue: newQueue,
        spaceBarHeld: spaceBarHeld
      })
    }
  }

  keyUp (e) {
    let newQueue = handleKeyUp(e, ...this.state.movementQueue)
    let spaceBarHeldFlag = false
    let ableToJump = null

    if (newQueue) {
      // This is to reset the spaceBarHeld state if space is released
      for (let i in newQueue) {
        if (newQueue[i] === 'SPACE_BAR') {
          spaceBarHeldFlag = true
        }
      }

      if (!spaceBarHeldFlag) {
        ableToJump = true
      }

      this.setState({
        movementQueue: newQueue,
        spaceBarHeld: spaceBarHeldFlag,
        ableToJump: ableToJump || this.state.ableToJump
      })
    }
  }

  loadGame () {
    getStyle(CONSTANTS.GAMEBOARD_WRAPPER).left = 0 + 'px'

    let cloudSpriteStyle1 = getStyle(CONSTANTS.CLOUDS_1_SPRITE)
    cloudSpriteStyle1.left = CONSTANTS.BOARD_WIDTH * 0.05 + 'px'
    cloudSpriteStyle1.top = CONSTANTS.SCREEN_HEIGHT * 0.12 + 'px'

    let cloudSpriteStyle2 = getStyle(CONSTANTS.CLOUDS_2_SPRITE)
    cloudSpriteStyle2.left = CONSTANTS.BOARD_WIDTH * 0.7 + 'px'
    cloudSpriteStyle2.top = CONSTANTS.SCREEN_HEIGHT * 0.2 + 'px'

    let cloudSpriteStyle3 = getStyle(CONSTANTS.CLOUDS_3_SPRITE)
    cloudSpriteStyle3.left = CONSTANTS.BOARD_WIDTH * 0.4 + 'px'
    cloudSpriteStyle3.top = CONSTANTS.SCREEN_HEIGHT * 0.05 + 'px'

    let cloudSpriteStyle4 = getStyle(CONSTANTS.CLOUDS_4_SPRITE)
    cloudSpriteStyle4.left = CONSTANTS.BOARD_WIDTH * 0.6 + 'px'
    cloudSpriteStyle4.top = CONSTANTS.SCREEN_HEIGHT * 0.12 + 'px'

    let cloudSpriteStyle5 = getStyle(CONSTANTS.CLOUDS_5_SPRITE)
    cloudSpriteStyle5.left = CONSTANTS.BOARD_WIDTH * 0.2 + 'px'
    cloudSpriteStyle5.top = CONSTANTS.SCREEN_HEIGHT * 0.2 + 'px'

    let cloudSpriteStyle6 = getStyle(CONSTANTS.CLOUDS_6_SPRITE)
    cloudSpriteStyle6.left = CONSTANTS.BOARD_WIDTH * 0.9 + 'px'
    cloudSpriteStyle6.top = CONSTANTS.SCREEN_HEIGHT * 0.05 + 'px'

    // let bushSpriteStyle1 = getStyle(CONSTANTS.BUSH_1_SPRITE_1)
    // bushSpriteStyle1.left = 105 + 'px'
    // bushSpriteStyle1.top = CONSTANTS.SCREEN_HEIGHT - 25 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let bushSpriteStyle12 = getStyle(CONSTANTS.BUSH_1_SPRITE_2)
    // bushSpriteStyle12.left = 1100 + 'px'
    // bushSpriteStyle12.top = CONSTANTS.SCREEN_HEIGHT - 25 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let bushSpriteStyle13 = getStyle(CONSTANTS.BUSH_1_SPRITE_3)
    // bushSpriteStyle13.left = 1985 + 'px'
    // bushSpriteStyle13.top = CONSTANTS.SCREEN_HEIGHT - 25 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let bushSpriteStyle14 = getStyle(CONSTANTS.BUSH_1_SPRITE_4)
    // bushSpriteStyle14.left = 3160 + 'px'
    // bushSpriteStyle14.top = CONSTANTS.SCREEN_HEIGHT - 25 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let bushSpriteStyle15 = getStyle(CONSTANTS.BUSH_1_SPRITE_5)
    // bushSpriteStyle15.left = 4040 + 'px'
    // bushSpriteStyle15.top = CONSTANTS.SCREEN_HEIGHT - 25 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let bushSpriteStyle16 = getStyle(CONSTANTS.BUSH_1_SPRITE_6)
    // bushSpriteStyle16.left = 6380 + 'px'
    // bushSpriteStyle16.top = CONSTANTS.SCREEN_HEIGHT - 25 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let bushSpriteStyle17 = getStyle(CONSTANTS.BUSH_1_SPRITE_7)
    // bushSpriteStyle17.left = 7365 + 'px'
    // bushSpriteStyle17.top = CONSTANTS.SCREEN_HEIGHT - 25 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let bushSpriteStyle18 = getStyle(CONSTANTS.BUSH_1_SPRITE_8)
    // bushSpriteStyle18.left = 8175 + 'px'
    // bushSpriteStyle18.top = CONSTANTS.SCREEN_HEIGHT - 25 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let bushSpriteStyle19 = getStyle(CONSTANTS.BUSH_1_SPRITE_9)
    // bushSpriteStyle19.left = 9315 + 'px'
    // bushSpriteStyle19.top = CONSTANTS.SCREEN_HEIGHT - 25 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let bushSpriteStyle21 = getStyle(CONSTANTS.BUSH_2_SPRITE_1)
    // bushSpriteStyle21.left = 545 + 'px'
    // bushSpriteStyle21.top = CONSTANTS.SCREEN_HEIGHT - 25 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let bushSpriteStyle22 = getStyle(CONSTANTS.BUSH_2_SPRITE_2)
    // bushSpriteStyle22.left = 2420 + 'px'
    // bushSpriteStyle22.top = CONSTANTS.SCREEN_HEIGHT - 25 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let bushSpriteStyle23 = getStyle(CONSTANTS.BUSH_2_SPRITE_3)
    // bushSpriteStyle23.left = 3600 + 'px'
    // bushSpriteStyle23.top = CONSTANTS.SCREEN_HEIGHT - 25 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let bushSpriteStyle24 = getStyle(CONSTANTS.BUSH_2_SPRITE_4)
    // bushSpriteStyle24.left = 6815 + 'px'
    // bushSpriteStyle24.top = CONSTANTS.SCREEN_HEIGHT - 25 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let bushSpriteStyle25 = getStyle(CONSTANTS.BUSH_2_SPRITE_5)
    // bushSpriteStyle25.left = 7810 + 'px'
    // bushSpriteStyle25.top = CONSTANTS.SCREEN_HEIGHT - 25 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let bushSpriteStyle26 = getStyle(CONSTANTS.BUSH_2_SPRITE_6)
    // bushSpriteStyle26.left = 8610 + 'px'
    // bushSpriteStyle26.top = CONSTANTS.SCREEN_HEIGHT - 25 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let bushSpriteStyle27 = getStyle(CONSTANTS.BUSH_2_SPRITE_7)
    // bushSpriteStyle27.left = 9750 + 'px'
    // bushSpriteStyle27.top = CONSTANTS.SCREEN_HEIGHT - 25 - CONSTANTS.GROUND_HEIGHT + 'px'

    // let boxSpriteStyle1 = getStyle(CONSTANTS.BOX_SPRITE_1)
    // boxSpriteStyle1.left = 50 + 'px'
    // boxSpriteStyle1.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle2 = getStyle(CONSTANTS.BOX_SPRITE_2)
    // boxSpriteStyle2.left = 85 + 'px'
    // boxSpriteStyle2.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle3 = getStyle(CONSTANTS.BOX_SPRITE_3)
    // boxSpriteStyle3.left = 125 + 'px'
    // boxSpriteStyle3.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle4 = getStyle(CONSTANTS.BOX_SPRITE_4)
    // boxSpriteStyle4.left = 160 + 'px'
    // boxSpriteStyle4.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle5 = getStyle(CONSTANTS.BOX_SPRITE_5)
    // boxSpriteStyle5.left = 195 + 'px'
    // boxSpriteStyle5.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle6 = getStyle(CONSTANTS.BOX_SPRITE_6)
    // boxSpriteStyle6.left = 50 + 'px'
    // boxSpriteStyle6.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle7 = getStyle(CONSTANTS.BOX_SPRITE_7)
    // boxSpriteStyle7.left = 50 + 'px'
    // boxSpriteStyle7.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle8 = getStyle(CONSTANTS.BOX_SPRITE_8)
    // boxSpriteStyle8.left = 50 + 'px'
    // boxSpriteStyle8.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle9 = getStyle(CONSTANTS.BOX_SPRITE_9)
    // boxSpriteStyle9.left = 50 + 'px'
    // boxSpriteStyle9.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle10 = getStyle(CONSTANTS.BOX_SPRITE_10)
    // boxSpriteStyle10.left = 50 + 'px'
    // boxSpriteStyle10.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle11 = getStyle(CONSTANTS.BOX_SPRITE_11)
    // boxSpriteStyle11.left = 50 + 'px'
    // boxSpriteStyle11.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle12 = getStyle(CONSTANTS.BOX_SPRITE_12)
    // boxSpriteStyle12.left = 50 + 'px'
    // boxSpriteStyle12.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle13 = getStyle(CONSTANTS.BOX_SPRITE_13)
    // boxSpriteStyle13.left = 50 + 'px'
    // boxSpriteStyle13.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle14 = getStyle(CONSTANTS.BOX_SPRITE_14)
    // boxSpriteStyle14.left = 50 + 'px'
    // boxSpriteStyle14.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle15 = getStyle(CONSTANTS.BOX_SPRITE_15)
    // boxSpriteStyle15.left = 50 + 'px'
    // boxSpriteStyle15.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle16 = getStyle(CONSTANTS.BOX_SPRITE_16)
    // boxSpriteStyle16.left = 50 + 'px'
    // boxSpriteStyle16.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle17 = getStyle(CONSTANTS.BOX_SPRITE_17)
    // boxSpriteStyle17.left = 50 + 'px'
    // boxSpriteStyle17.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle18 = getStyle(CONSTANTS.BOX_SPRITE_18)
    // boxSpriteStyle18.left = 50 + 'px'
    // boxSpriteStyle18.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle19 = getStyle(CONSTANTS.BOX_SPRITE_19)
    // boxSpriteStyle19.left = 50 + 'px'
    // boxSpriteStyle19.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle20 = getStyle(CONSTANTS.BOX_SPRITE_20)
    // boxSpriteStyle20.left = 50 + 'px'
    // boxSpriteStyle20.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle21 = getStyle(CONSTANTS.BOX_SPRITE_21)
    // boxSpriteStyle21.left = 50 + 'px'
    // boxSpriteStyle21.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle22 = getStyle(CONSTANTS.BOX_SPRITE_22)
    // boxSpriteStyle22.left = 50 + 'px'
    // boxSpriteStyle22.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle23 = getStyle(CONSTANTS.BOX_SPRITE_23)
    // boxSpriteStyle23.left = 50 + 'px'
    // boxSpriteStyle23.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle24 = getStyle(CONSTANTS.BOX_SPRITE_24)
    // boxSpriteStyle24.left = 50 + 'px'
    // boxSpriteStyle24.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle25 = getStyle(CONSTANTS.BOX_SPRITE_25)
    // boxSpriteStyle25.left = 50 + 'px'
    // boxSpriteStyle25.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle26 = getStyle(CONSTANTS.BOX_SPRITE_26)
    // boxSpriteStyle26.left = 50 + 'px'
    // boxSpriteStyle26.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle27 = getStyle(CONSTANTS.BOX_SPRITE_27)
    // boxSpriteStyle27.left = 50 + 'px'
    // boxSpriteStyle27.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle28 = getStyle(CONSTANTS.BOX_SPRITE_28)
    // boxSpriteStyle28.left = 50 + 'px'
    // boxSpriteStyle28.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle29 = getStyle(CONSTANTS.BOX_SPRITE_29)
    // boxSpriteStyle29.left = 50 + 'px'
    // boxSpriteStyle29.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle30 = getStyle(CONSTANTS.BOX_SPRITE_30)
    // boxSpriteStyle30.left = 50 + 'px'
    // boxSpriteStyle30.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle31 = getStyle(CONSTANTS.BOX_SPRITE_31)
    // boxSpriteStyle31.left = 50 + 'px'
    // boxSpriteStyle31.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle32 = getStyle(CONSTANTS.BOX_SPRITE_32)
    // boxSpriteStyle32.left = 50 + 'px'
    // boxSpriteStyle32.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle33 = getStyle(CONSTANTS.BOX_SPRITE_33)
    // boxSpriteStyle33.left = 50 + 'px'
    // boxSpriteStyle33.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle34 = getStyle(CONSTANTS.BOX_SPRITE_34)
    // boxSpriteStyle34.left = 50 + 'px'
    // boxSpriteStyle34.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle35 = getStyle(CONSTANTS.BOX_SPRITE_35)
    // boxSpriteStyle35.left = 50 + 'px'
    // boxSpriteStyle35.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle36 = getStyle(CONSTANTS.BOX_SPRITE_36)
    // boxSpriteStyle36.left = 50 + 'px'
    // boxSpriteStyle36.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle37 = getStyle(CONSTANTS.BOX_SPRITE_37)
    // boxSpriteStyle37.left = 50 + 'px'
    // boxSpriteStyle37.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle38 = getStyle(CONSTANTS.BOX_SPRITE_38)
    // boxSpriteStyle38.left = 50 + 'px'
    // boxSpriteStyle38.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle39 = getStyle(CONSTANTS.BOX_SPRITE_39)
    // boxSpriteStyle39.left = 50 + 'px'
    // boxSpriteStyle39.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle40 = getStyle(CONSTANTS.BOX_SPRITE_40)
    // boxSpriteStyle40.left = 50 + 'px'
    // boxSpriteStyle40.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle41 = getStyle(CONSTANTS.BOX_SPRITE_41)
    // boxSpriteStyle41.left = 50 + 'px'
    // boxSpriteStyle41.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle42 = getStyle(CONSTANTS.BOX_SPRITE_42)
    // boxSpriteStyle42.left = 50 + 'px'
    // boxSpriteStyle42.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle43 = getStyle(CONSTANTS.BOX_SPRITE_43)
    // boxSpriteStyle43.left = 50 + 'px'
    // boxSpriteStyle43.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle44 = getStyle(CONSTANTS.BOX_SPRITE_44)
    // boxSpriteStyle44.left = 50 + 'px'
    // boxSpriteStyle44.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle45 = getStyle(CONSTANTS.BOX_SPRITE_45)
    // boxSpriteStyle45.left = 50 + 'px'
    // boxSpriteStyle45.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle46 = getStyle(CONSTANTS.BOX_SPRITE_46)
    // boxSpriteStyle46.left = 50 + 'px'
    // boxSpriteStyle46.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle47 = getStyle(CONSTANTS.BOX_SPRITE_47)
    // boxSpriteStyle47.left = 50 + 'px'
    // boxSpriteStyle47.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle48 = getStyle(CONSTANTS.BOX_SPRITE_48)
    // boxSpriteStyle48.left = 50 + 'px'
    // boxSpriteStyle48.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle49 = getStyle(CONSTANTS.BOX_SPRITE_49)
    // boxSpriteStyle49.left = 50 + 'px'
    // boxSpriteStyle49.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle50 = getStyle(CONSTANTS.BOX_SPRITE_50)
    // boxSpriteStyle50.left = 50 + 'px'
    // boxSpriteStyle50.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle51 = getStyle(CONSTANTS.BOX_SPRITE_51)
    // boxSpriteStyle51.left = 50 + 'px'
    // boxSpriteStyle51.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle52 = getStyle(CONSTANTS.BOX_SPRITE_52)
    // boxSpriteStyle52.left = 50 + 'px'
    // boxSpriteStyle52.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle53 = getStyle(CONSTANTS.BOX_SPRITE_53)
    // boxSpriteStyle53.left = 50 + 'px'
    // boxSpriteStyle53.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle54 = getStyle(CONSTANTS.BOX_SPRITE_54)
    // boxSpriteStyle54.left = 50 + 'px'
    // boxSpriteStyle54.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle55 = getStyle(CONSTANTS.BOX_SPRITE_55)
    // boxSpriteStyle55.left = 50 + 'px'
    // boxSpriteStyle55.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle56 = getStyle(CONSTANTS.BOX_SPRITE_56)
    // boxSpriteStyle56.left = 50 + 'px'
    // boxSpriteStyle56.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle57 = getStyle(CONSTANTS.BOX_SPRITE_57)
    // boxSpriteStyle57.left = 50 + 'px'
    // boxSpriteStyle57.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle58 = getStyle(CONSTANTS.BOX_SPRITE_58)
    // boxSpriteStyle58.left = 50 + 'px'
    // boxSpriteStyle58.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle59 = getStyle(CONSTANTS.BOX_SPRITE_59)
    // boxSpriteStyle59.left = 50 + 'px'
    // boxSpriteStyle59.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle60 = getStyle(CONSTANTS.BOX_SPRITE_60)
    // boxSpriteStyle60.left = 50 + 'px'
    // boxSpriteStyle60.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle61 = getStyle(CONSTANTS.BOX_SPRITE_61)
    // boxSpriteStyle61.left = 50 + 'px'
    // boxSpriteStyle61.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle62 = getStyle(CONSTANTS.BOX_SPRITE_62)
    // boxSpriteStyle62.left = 50 + 'px'
    // boxSpriteStyle62.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle63 = getStyle(CONSTANTS.BOX_SPRITE_63)
    // boxSpriteStyle63.left = 50 + 'px'
    // boxSpriteStyle63.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle64 = getStyle(CONSTANTS.BOX_SPRITE_64)
    // boxSpriteStyle64.left = 50 + 'px'
    // boxSpriteStyle64.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle65 = getStyle(CONSTANTS.BOX_SPRITE_65)
    // boxSpriteStyle65.left = 50 + 'px'
    // boxSpriteStyle65.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle66 = getStyle(CONSTANTS.BOX_SPRITE_66)
    // boxSpriteStyle66.left = 50 + 'px'
    // boxSpriteStyle66.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle67 = getStyle(CONSTANTS.BOX_SPRITE_67)
    // boxSpriteStyle67.left = 50 + 'px'
    // boxSpriteStyle67.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle68 = getStyle(CONSTANTS.BOX_SPRITE_68)
    // boxSpriteStyle68.left = 50 + 'px'
    // boxSpriteStyle68.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle69 = getStyle(CONSTANTS.BOX_SPRITE_69)
    // boxSpriteStyle69.left = 50 + 'px'
    // boxSpriteStyle69.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'
    //
    // let boxSpriteStyle70 = getStyle(CONSTANTS.BOX_SPRITE_70)
    // boxSpriteStyle70.left = 50 + 'px'
    // boxSpriteStyle70.top = CONSTANTS.SCREEN_HEIGHT - 125 - CONSTANTS.GROUND_HEIGHT + 'px'

    let gameboardGroundStyle1 = getStyle(CONSTANTS.GAMEBOARD_GROUND_1)
    let gameboardGroundHeight1 = getHeight(CONSTANTS.GAMEBOARD_GROUND_1)
    gameboardGroundStyle1.top =
      CONSTANTS.SCREEN_HEIGHT - gameboardGroundHeight1 + 'px'
    gameboardGroundStyle1.left = 0 + 'px'
    gameboardGroundStyle1.width = 1500 + 'px'

    let gameboardGroundStyle2 = getStyle(CONSTANTS.GAMEBOARD_GROUND_2)
    let gameboardGroundHeight2 = getHeight(CONSTANTS.GAMEBOARD_GROUND_2)
    gameboardGroundStyle2.top =
      CONSTANTS.SCREEN_HEIGHT - gameboardGroundHeight2 + 'px'
    gameboardGroundStyle2.left = 1650 + 'px'
    gameboardGroundStyle2.width = 2800 + 'px'

    let gameboardGroundStyle3 = getStyle(CONSTANTS.GAMEBOARD_GROUND_3)
    let gameboardGroundHeight3 = getHeight(CONSTANTS.GAMEBOARD_GROUND_3)
    gameboardGroundStyle3.top =
      CONSTANTS.SCREEN_HEIGHT - gameboardGroundHeight3 + 'px'
    gameboardGroundStyle3.left = 5725 + 'px'
    gameboardGroundStyle3.width = 3400 + 'px'

    let gameboardGroundStyle4 = getStyle(CONSTANTS.GAMEBOARD_GROUND_4)
    let gameboardGroundHeight4 = getHeight(CONSTANTS.GAMEBOARD_GROUND_4)
    gameboardGroundStyle4.top =
      CONSTANTS.SCREEN_HEIGHT - gameboardGroundHeight4 + 'px'
    gameboardGroundStyle4.left = 9275 + 'px'
    gameboardGroundStyle4.width = 725 + 'px'
  }

  initialize () {
    let spritesWithBoxCollider = []

    spritesWithBoxCollider.push(CONSTANTS.GAMEBOARD_GROUND_1)
    spritesWithBoxCollider.push(CONSTANTS.GAMEBOARD_GROUND_2)
    spritesWithBoxCollider.push(CONSTANTS.GAMEBOARD_GROUND_3)
    spritesWithBoxCollider.push(CONSTANTS.GAMEBOARD_GROUND_4)

    // for (let j = 1; j <= 70; j++) {
    //   spritesWithBoxCollider.push(CONSTANTS['BOX_SPRITE_' + j])
    //   j++
    // }

    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_1)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_2)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_3)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_4)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_5)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_6)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_7)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_8)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_9)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_10)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_11)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_12)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_13)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_14)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_15)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_16)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_17)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_18)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_19)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_20)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_21)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_22)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_23)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_24)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_25)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_26)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_27)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_28)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_29)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_30)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_31)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_32)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_33)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_34)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_35)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_17)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_18)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_19)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_1)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_2)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_3)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_4)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_5)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_6)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_7)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_8)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_9)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_10)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_11)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_12)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_13)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_14)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_15)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_16)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_17)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_18)
    // spritesWithBoxCollider.push(CONSTANTS.BOX_SPRITE_19)

    let playerSpriteStyle = getStyle(CONSTANTS.PLAYER_SPRITE)
    // let playerSpritesheetStyle = getStyle(CONSTANTS.PLAYER_SPRITESHEET)
    playerSpriteStyle.height = CONSTANTS.PLAYER_SPRITE_HEIGHT + 'px'
    // playerSpriteStyle.width = getWidth(CONSTANTS.PLAYER_SPRITESHEET) / CONSTANTS.PLAYER_SPRITESHEET_FRAMES + 'px'
    playerSpriteStyle.width = CONSTANTS.PLAYER_SPRITE_HEIGHT + 'px'
    playerSpriteStyle.visibility = 'visible'
    playerSpriteStyle.top = (CONSTANTS.SCREEN_HEIGHT * 2) / 3 + 'px'
    playerSpriteStyle.left = 0 + 'px'
    // playerSpritesheetStyle.left = 0
    spritesWithBoxCollider.push(CONSTANTS.PLAYER_SPRITE)

    let enemySpriteStyle1 = getStyle(CONSTANTS.ENEMY_1)
    enemySpriteStyle1.height = CONSTANTS.ENEMY_SPRITE_HEIGHT + 'px'
    enemySpriteStyle1.width = CONSTANTS.ENEMY_SPRITE_HEIGHT + 'px'
    // enemySpriteStyle1.width = getWidth(CONSTANTS.ENEMY_SPRITESHEET) / CONSTANTS.ENEMY_SPRITESHEET_FRAMES + 'px'
    enemySpriteStyle1.top =
      CONSTANTS.SCREEN_HEIGHT -
      CONSTANTS.GROUND_HEIGHT -
      getHeight(CONSTANTS.ENEMY_1) +
      'px'
    enemySpriteStyle1.left = 1800 + 'px'
    enemySpriteStyle1.visibility = 'visible'
    spritesWithBoxCollider.push(CONSTANTS.ENEMY_1)

    this.setState({
      spritesWithBoxCollider: spritesWithBoxCollider
    })

    this.startIntervals()
  }

  startGameLoopInterval () {
    this.gameLoopInterval = setInterval(
      () => this.gameLoop(),
      CONSTANTS.SYNC_SPEED
    )
  }

  clearGameLoopInterval () {
    clearInterval(this.gameLoopInterval)
  }

  startGameTimeInterval () {
    this.gameTimeInterval = setInterval(
      () =>
        this.setState((prevState, props) => {
          return {
            gameTime: prevState.gameTime + 1,
            mouseTimer: prevState.mouseTimer + 1
          }
        }),
      1000
    )
  }

  clearGameTimeInterval () {
    clearInterval(this.gameTimeInterval)
  }

  // startSpriteAnimationInterval () {
  //   this.spriteAnimationInterval = setInterval(
  //     () => this.spriteAnimation(), CONSTANTS.ANIMATION_SPEED
  //   )
  // }

  clearSpriteAnimationInterval () {
    clearInterval(this.spriteAnimationInterval)
  }

  startIntervals () {
    this.startGameLoopInterval()
    this.startGameTimeInterval()
    // this.startSpriteAnimationInterval()
  }

  clearIntervals () {
    this.clearGameLoopInterval()
    this.clearGameTimeInterval()
    // this.clearSpriteAnimationInterval()
  }

  // spriteAnimation () {
  //   playerSpriteAnimation(this.state.animation)
  // }

  gameLoop () {
    this.movePlayerSprite(...this.state.movementQueue)

    // moveClouds()
  }

  handleGameState (input) {
    let menuState = this.state.menuState
    let gameInProgress = this.state.gameInProgress

    switch (input) {
      case 'startGame':
        this.initialize()
        menuState = false
        gameInProgress = true
        break

      case 'resumeGame':
        this.startIntervals()
        menuState = false
        break

      case 'pauseMenu':
        this.clearIntervals()
        menuState = input
        break

      default:
        menuState = input
    }

    this.setState({
      menuState: menuState,
      gameInProgress: gameInProgress
    })
  }

  showMouse () {
    if (this.state.gameInProgress) {
      this.setState({
        mouseTimer: 0
      })
    }
  }

  checkIfPlayerSpriteShouldFall () {
    if (!this.state.playerSpriteJumping) {
      if (
        checkCollisionY(
          this.state.spritesWithBoxCollider,
          CONSTANTS.PLAYER_SPRITE
        ) === 'y-top'
      ) {
        return false
      }
      return true
    }
  }

  movePlayerSprite (...movementQueue) {
    let [...queue] = movementQueue
    let spriteMovingLeft = false
    let spriteMovingRight = false
    let spriteJumping = false
    // let animation = null

    let spriteStyle = getStyle(CONSTANTS.PLAYER_SPRITE)
    let spritePositionX = parseInt(spriteStyle.left, 10)
    let spritePositionY = parseInt(spriteStyle.top, 10)
    let newSpritePositionX = spritePositionX
    let newSpritePositionY = spritePositionY

    let cameraPositionStyle = getStyle(CONSTANTS.GAMEBOARD_WRAPPER)
    let cameraPositionX = parseFloat(cameraPositionStyle.left, 10)
    let newCameraPositionX = cameraPositionX

    // Checks if the sprite is colliding with a y-top of a sprite
    // If it is, return false, otherwise it should fall
    let spriteFalling = this.checkIfPlayerSpriteShouldFall()

    if (queue.length > 0) {
      for (let i in queue) {
        switch (queue[i]) {
          case 'LEFT_ARROW':
            spriteMovingLeft = true
            break
          case 'RIGHT_ARROW':
            spriteMovingRight = true
            break
          case 'SPACE_BAR':
            spriteJumping = true
            break
          default:
            throw new Error('Invalid movement: ', queue[i])
        }
      }
    }

    // Call spriteJumping if character is already jumping, but
    // SPACE_BAR is no longer being held down
    if (this.state.playerSpriteJumping) spriteJumping = true

    // If both left and right arrows are pressed, don't move sprite
    if (spriteMovingLeft && spriteMovingRight) {
      spriteMovingLeft = spriteMovingRight = false
    }

    // If only left and/or jump is pressed:
    // Move sprite left
    // Animate sprite
    if (spriteMovingLeft) {
      newSpritePositionX = movePlayerSpriteLeft(
        spritePositionX,
        ...this.state.spritesWithBoxCollider
      )

      // animation = 'MOVE_LEFT'
    }

    // If only right and/or jump is pressed:
    // Move sprite right
    // Animate sprite
    if (spriteMovingRight) {
      newSpritePositionX = movePlayerSpriteRight(
        spritePositionX,
        ...this.state.spritesWithBoxCollider
      )

      // animation = 'MOVE_RIGHT'
    }

    if (spriteJumping) {
      // If player sprite is colliding with ground
      if (
        !this.state.playerSpriteJumping &&
        !spriteFalling &&
        this.state.ableToJump
      ) {
        this.setPlayerSpriteJumpingState(spritePositionY)
      }

      if (this.state.playerSpriteJumping) {
        // if max height reached while holding space bar
        if (
          this.state.spaceBarHeld &&
          newSpritePositionY <=
            this.state.startingYJumpPosition -
              CONSTANTS.PLAYER_MAX_JUMP_HEIGHT_HOLDING_SPACE
        ) {
          this.falsifyPlayerSpriteJumpingState()

          // else if not holding space bar & max height reached
        } else if (
          !this.state.spaceBarHeld &&
          newSpritePositionY <=
            this.state.startingYJumpPosition - CONSTANTS.PLAYER_MAX_JUMP_HEIGHT
        ) {
          this.falsifyPlayerSpriteJumpingState()

          // Move sprite up
        } else {
          newSpritePositionY = movePlayerSpriteUp(
            spritePositionY,
            ...this.state.spritesWithBoxCollider
          )

          if (newSpritePositionY === spritePositionY) {
            this.falsifyPlayerSpriteJumpingState()
          }

          // if (spriteMovingRight) {
          //   animation = 'JUMP_RIGHT'
          // } else if (spriteMovingLeft) {
          //   animation = 'JUMP_LEFT'
          // } else {
          //   animation = 'JUMP'
          // }
        }
      }
    }

    if (spriteFalling) {
      newSpritePositionY = movePlayerSpriteDown(
        spritePositionY,
        ...this.state.spritesWithBoxCollider
      )

      // animation = 'JUMP'
    }

    // If the player sprite is not moving in any direction
    if (
      !spriteMovingLeft &&
      !spriteMovingRight &&
      !spriteJumping &&
      !spriteFalling
    ) {
      // animation = null
    }

    newCameraPositionX = centerCameraX(newSpritePositionX)

    // Update the styles of the player sprite & camera
    spriteStyle.left = newSpritePositionX + 'px'
    spriteStyle.top = newSpritePositionY + 'px'
    cameraPositionStyle.left = newCameraPositionX + 'px'

    this.setState({
      // animation: animation
    })
  }

  setPlayerSpriteJumpingState (spritePositionY) {
    this.setState({
      playerSpriteJumping: true,
      startingYJumpPosition: spritePositionY,
      ableToJump: false
    })
  }

  falsifyPlayerSpriteJumpingState () {
    this.setState({
      playerSpriteJumping: false
    })
  }

  render () {
    return (
      <div>
        <ContentSection>
          <div
            className={`pane center gameboard-foreground ${
              this.state.mouseTimer < 2 ? 'show-mouse' : ''
            }`}
            id='gameboard-foreground'
            style={{
              height: CONSTANTS.SCREEN_HEIGHT,
              width: CONSTANTS.SCREEN_WIDTH,
              backgroundColor: '#AACDF8'
            }}
            onMouseMove={this.showMouse.bind(this)}
          >
            <div
              className='game-menu'
              style={{ display: this.state.menuState ? 'flex' : 'none' }}
            >
              <div
                style={{
                  display:
                    this.state.menuState === 'startMenu' ? 'flex' : 'none'
                }}
              >
                <img
                  src='/svg/projects/pixelated/pixelated-logo.svg'
                  alt='Pixels'
                />
                <button onClick={this.handleGameState.bind(this, 'startGame')}>
                  Start
                </button>
                <button
                  onClick={this.handleGameState.bind(this, 'showControlMenu')}
                >
                  Controls
                </button>
              </div>
              <div
                style={{
                  display:
                    this.state.menuState === 'pauseMenu' ? 'flex' : 'none'
                }}
              >
                <img
                  src='/svg/projects/pixelated/pixelated-logo.svg'
                  alt='Pixels'
                />
                <button onClick={this.handleGameState.bind(this, 'resumeGame')}>
                  Resume
                </button>
                <button
                  onClick={this.handleGameState.bind(this, 'showControlMenu')}
                >
                  Controls
                </button>
              </div>
              <div
                className='control-menu'
                style={{
                  display:
                    this.state.menuState === 'showControlMenu' ? 'flex' : 'none'
                }}
              >
                <span
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    marginBottom: '20px'
                  }}
                >
                  Use the keyboard to control
                </span>
                <div>
                  <svg width='30' height='30' viewBox='0 0 40 40'>
                    <path fill='#fff' d='M20 5v7h14v16h-14v7l-15-15 15-15z' />
                  </svg>
                  Move left (left-arrow)
                </div>
                <div>
                  <svg width='30' height='30' viewBox='0 0 40 40'>
                    <path
                      fill='#fff'
                      d='M35 20l-15 15v-7h-14v-16h14v-7l15 15z'
                    />
                  </svg>
                  Move right (right-arrow)
                </div>
                <div>
                  <svg width='36' height='36' viewBox='0 0 48 48'>
                    <path
                      fill='#fff'
                      d='M36 18h4.031v12h-32.063v-12h4.031v7.969h24v-7.969z'
                    />
                  </svg>
                  Jump (space-bar)
                </div>
                <button
                  onClick={this.handleGameState.bind(
                    this,
                    this.state.gameInProgress ? 'pauseMenu' : 'startMenu'
                  )}
                >
                  Return
                </button>
              </div>
            </div>
            <div
              className='gameboard-wrapper'
              style={{
                width: CONSTANTS.BOARD_WIDTH,
                height: CONSTANTS.SCREEN_HEIGHT,
                transition: 'transform 0.3s'
              }}
              id='gameboard-wrapper'
            >
              <div className='gameboard-ground' id='gameboard-ground-1' />
              <div className='gameboard-ground' id='gameboard-ground-2' />
              <div className='gameboard-ground' id='gameboard-ground-3' />
              <div className='gameboard-ground' id='gameboard-ground-4' />
              <div className='clouds-1-sprite clouds' id='clouds-1-sprite' />
              <div className='clouds-2-sprite clouds' id='clouds-2-sprite' />
              <div className='clouds-3-sprite clouds' id='clouds-3-sprite' />
              <div className='clouds-1-sprite clouds' id='clouds-4-sprite' />
              <div className='clouds-2-sprite clouds' id='clouds-5-sprite' />
              <div className='clouds-3-sprite clouds' id='clouds-6-sprite' />
              {/* <div
                className='bush-1-sprite bush'
                id='bush-1-sprite-1'
              /> */}
              {/* <div
                className='bush-1-sprite bush'
                id='bush-1-sprite-2'
              /> */}
              {/* <div
                className='bush-1-sprite bush'
                id='bush-1-sprite-3'
              />
              <div
                className='bush-1-sprite bush'
                id='bush-1-sprite-4'
              />
              <div
                className='bush-1-sprite bush'
                id='bush-1-sprite-5'
              />
              <div
                className='bush-1-sprite bush'
                id='bush-1-sprite-6'
              />
              <div
                className='bush-1-sprite bush'
                id='bush-1-sprite-7'
              />
              <div
                className='bush-1-sprite bush'
                id='bush-1-sprite-8'
              />
              <div
                className='bush-1-sprite bush'
                id='bush-1-sprite-9'
              />
              <div
                className='bush-2-sprite bush'
                id='bush-2-sprite-1'
              />
              <div
                className='bush-2-sprite bush'
                id='bush-2-sprite-2'
              />
              <div
                className='bush-2-sprite bush'
                id='bush-2-sprite-3'
              />
              <div
                className='bush-2-sprite bush'
                id='bush-2-sprite-4'
              />
              <div
                className='bush-2-sprite bush'
                id='bush-2-sprite-5'
              />
              <div
                className='bush-2-sprite bush'
                id='bush-2-sprite-6'
              />
              <div
                className='bush-2-sprite bush'
                id='bush-2-sprite-7'
              /> */}
              {/* <div
                className='box-sprite-1 box'
                id='box-sprite-1'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-2'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-3'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-4'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-5'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-6'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-7'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-8'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-9'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-10'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-11'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-12'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-13'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-14'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-15'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-16'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-17'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-18'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-19'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-20'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-21'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-22'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-23'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-24'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-25'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-26'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-27'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-28'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-29'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-30'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-31'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-32'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-33'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-34'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-35'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-36'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-37'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-38'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-39'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-40'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-41'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-42'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-43'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-44'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-45'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-46'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-47'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-48'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-49'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-50'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-51'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-52'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-53'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-54'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-55'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-56'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-57'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-58'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-59'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-60'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-61'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-62'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-63'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-64'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-65'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-66'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-67'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-68'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-69'
              />
              <div
                className='box-sprite-1 box'
                id='box-sprite-70'
              /> */}
              <div className='enemy-sprite' id='enemy-1-sprite'>
                {/* <img
                  src={require('../../../assets/enemy-spritesheet.png')}
                  alt='enemy sprite'
                  id='enemy-spritesheet'
                /> */}
              </div>
              <div className='player-sprite' id='player-sprite'>
                {/* <img
                  src={require('../../../assets/player-spritesheet.png')}
                  alt='player sprite'
                  id='player-spritesheet'
                /> */}
              </div>
            </div>
            <div className='score-wrapper'>
              <div className='score-coin' />x{this.state.score}
            </div>
            <div
              className='pause-button'
              style={{ display: !this.state.menuState ? 'flex' : 'none' }}
              onClick={this.handleGameState.bind(this, 'pauseMenu')}
            />
            <div className='timer'>
              <svg width='24' height='24' viewBox='0 0 24 24'>
                <path d='M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z' />
              </svg>
              {this.state.gameTime}
            </div>
          </div>
        </ContentSection>
      </div>
    )
  }
}
