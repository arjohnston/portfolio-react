let initialState = {
  gameInProgress: false,
  gameLoopTimer: null,
  score: 0,
  movementQueue: [],
  playerSpriteJumpingState: false,
  spaceBarHeld: false,
  spritesWithBoxCollider: [],
  startingYJumpPosition: null,
  gameTime: 0,
  frameCounter: 0,
  menuState: 'startMenu',
  mouseShown: true,
  playerSpriteJumping: false,
  ableToJump: true,
  mouseTimer: 0,
  animation: null
}

module.exports = initialState
