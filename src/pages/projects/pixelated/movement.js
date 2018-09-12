import {
  getWidth,
  getHeight,
  getStyle
} from './helpers'
import * as CONSTANTS from './constants'

// export function moveClouds () {
//   let cloudStyle1 = getStyle(CONSTANTS.CLOUDS_1_SPRITE)
//   let cloudStyle2 = getStyle(CONSTANTS.CLOUDS_2_SPRITE)
//   let cloudStyle3 = getStyle(CONSTANTS.CLOUDS_3_SPRITE)
//   let cloudStyle4 = getStyle(CONSTANTS.CLOUDS_4_SPRITE)
//   let cloudStyle5 = getStyle(CONSTANTS.CLOUDS_5_SPRITE)
//   let cloudStyle6 = getStyle(CONSTANTS.CLOUDS_6_SPRITE)
//   let cloudLeft1 = parseFloat(cloudStyle1.left, 10)
//   let cloudLeft2 = parseFloat(cloudStyle2.left, 10)
//   let cloudLeft3 = parseFloat(cloudStyle3.left, 10)
//   let cloudLeft4 = parseFloat(cloudStyle4.left, 10)
//   let cloudLeft5 = parseFloat(cloudStyle5.left, 10)
//   let cloudLeft6 = parseFloat(cloudStyle6.left, 10)
//
//   if (cloudLeft1 + getWidth(CONSTANTS.CLOUDS_1_SPRITE) < 0) {
//     cloudStyle1.left = CONSTANTS.BOARD_WIDTH + 'px'
//   } else {
//     cloudStyle1.left = cloudLeft1 - CONSTANTS.CLOUD_1_SPEED + 'px'
//   }
//
//   if (cloudLeft2 + getWidth(CONSTANTS.CLOUDS_2_SPRITE) < 0) {
//     cloudStyle2.left = CONSTANTS.BOARD_WIDTH + 'px'
//   } else {
//     cloudStyle2.left = cloudLeft2 - CONSTANTS.CLOUD_2_SPEED + 'px'
//   }
//
//   if (cloudLeft3 + getWidth(CONSTANTS.CLOUDS_3_SPRITE) < 0) {
//     cloudStyle3.left = CONSTANTS.BOARD_WIDTH + 'px'
//   } else {
//     cloudStyle3.left = cloudLeft3 - CONSTANTS.CLOUD_3_SPEED + 'px'
//   }
//
//   if (cloudLeft4 + getWidth(CONSTANTS.CLOUDS_4_SPRITE) < 0) {
//     cloudStyle4.left = CONSTANTS.BOARD_WIDTH + 'px'
//   } else {
//     cloudStyle4.left = cloudLeft4 - CONSTANTS.CLOUD_1_SPEED + 'px'
//   }
//
//   if (cloudLeft5 + getWidth(CONSTANTS.CLOUDS_5_SPRITE) < 0) {
//     cloudStyle5.left = CONSTANTS.BOARD_WIDTH + 'px'
//   } else {
//     cloudStyle5.left = cloudLeft5 - CONSTANTS.CLOUD_2_SPEED + 'px'
//   }
//
//   if (cloudLeft6 + getWidth(CONSTANTS.CLOUDS_6_SPRITE) < 0) {
//     cloudStyle6.left = CONSTANTS.BOARD_WIDTH + 'px'
//   } else {
//     cloudStyle6.left = cloudLeft6 - CONSTANTS.CLOUD_3_SPEED + 'px'
//   }
// }

// Refactor all collision functions for DRY
// Checks general collision with object
export function checkCollision (
  spritesWithBoxCollider,
  spriteId1,
  newSpritePositionXId1 = null,
  newSpritePositionYId1 = null,
  spriteId2 = null
) {
  let spriteIdStyle1 = getStyle(spriteId1)
  let spriteBoundingBoxLeft1 = parseInt(spriteIdStyle1.left, 10)
  let spriteBoundingBoxRight1 = spriteBoundingBoxLeft1 + getWidth(spriteId1)
  let spriteBoundingBoxTop1 = parseInt(spriteIdStyle1.top, 10)
  let spriteBoundingBoxBottom1 = spriteBoundingBoxTop1 + getHeight(spriteId1)

  if (newSpritePositionXId1) {
    spriteBoundingBoxLeft1 = newSpritePositionXId1
    spriteBoundingBoxRight1 = spriteBoundingBoxLeft1 + getWidth(spriteId1)
  }

  if (newSpritePositionYId1) {
    spriteBoundingBoxTop1 = newSpritePositionYId1
    spriteBoundingBoxBottom1 = spriteBoundingBoxTop1 + getHeight(spriteId1)
  }

  if (spriteId2 !== null) {
    let spriteIdStyle2 = getStyle(spriteId2)
    let spriteBoundingBoxLeft2 = parseInt(spriteIdStyle2.left, 10)
    let spriteBoundingBoxRight2 = spriteBoundingBoxLeft2 + getWidth(spriteId2)
    let spriteBoundingBoxTop2 = parseInt(spriteIdStyle2.top, 10)
    let spriteBoundingBoxBottom2 = spriteBoundingBoxTop2 + getHeight(spriteId2)

    if (
      spriteBoundingBoxLeft1 < spriteBoundingBoxRight2 &&
      spriteBoundingBoxRight1 > spriteBoundingBoxLeft2 &&
      spriteBoundingBoxTop1 < spriteBoundingBoxBottom2 &&
      spriteBoundingBoxBottom1 > spriteBoundingBoxTop2
    ) {
      return 'collision'
    }

    return false
  }

  if (spritesWithBoxCollider.length > 0) {
    for (let index in spritesWithBoxCollider) {
      if (spritesWithBoxCollider[index] !== spriteId1 && checkCollision(spritesWithBoxCollider, spriteId1, newSpritePositionXId1, newSpritePositionYId1, spritesWithBoxCollider[index])) {
        return checkCollision(spritesWithBoxCollider, spriteId1, newSpritePositionXId1, newSpritePositionYId1, spritesWithBoxCollider[index])
      }
    }
  }

  return false
}

// Created this function because X axis was not being
// triggered before Y axis. Caused problems when colliding with side
export function checkCollisionX (
  spritesWithBoxCollider,
  spriteId1,
  newSpritePositionXId1 = null,
  newSpritePositionYId1 = null,
  spriteId2 = null
) {
  let spriteIdStyle1 = getStyle(spriteId1)
  let spriteBoundingBoxLeft1 = parseInt(spriteIdStyle1.left, 10)
  let spriteBoundingBoxRight1 = spriteBoundingBoxLeft1 + getWidth(spriteId1)
  let spriteBoundingBoxTop1 = parseInt(spriteIdStyle1.top, 10)
  let spriteBoundingBoxBottom1 = spriteBoundingBoxTop1 + getHeight(spriteId1)

  if (newSpritePositionXId1) {
    spriteBoundingBoxLeft1 = newSpritePositionXId1
    spriteBoundingBoxRight1 = spriteBoundingBoxLeft1 + getWidth(spriteId1)
  }

  if (newSpritePositionYId1) {
    spriteBoundingBoxTop1 = newSpritePositionYId1
    spriteBoundingBoxBottom1 = spriteBoundingBoxTop1 + getHeight(spriteId1)
  }

  if (spriteId2 !== null) {
    let spriteIdStyle2 = getStyle(spriteId2)
    let spriteBoundingBoxLeft2 = parseInt(spriteIdStyle2.left, 10)
    let spriteBoundingBoxRight2 = spriteBoundingBoxLeft2 + getWidth(spriteId2)
    let spriteBoundingBoxTop2 = parseInt(spriteIdStyle2.top, 10)
    let spriteBoundingBoxBottom2 = spriteBoundingBoxTop2 + getHeight(spriteId2)

    // These collisions refer to the object being collided with
    // (y-top = spriteId2 y-top)
    if (
      // check for x-left collision
      spriteBoundingBoxRight1 >= spriteBoundingBoxLeft2 - 1 &&
      spriteBoundingBoxRight2 - (spriteBoundingBoxRight2 - spriteBoundingBoxLeft2) - 1 >= spriteBoundingBoxLeft1 &&
      spriteBoundingBoxTop1 <= spriteBoundingBoxBottom2 - 2 &&
      spriteBoundingBoxTop2 + 2 <= spriteBoundingBoxBottom1
    ) {
      return 'x-left'
    } else if (
      // check for x-right collision
      spriteBoundingBoxLeft1 <= spriteBoundingBoxRight2 + 1 &&
      spriteBoundingBoxLeft2 <= spriteBoundingBoxLeft1 &&
      spriteBoundingBoxTop1 <= spriteBoundingBoxBottom2 - 2 &&
      spriteBoundingBoxTop2 + 2 <= spriteBoundingBoxBottom1
    ) {
      return 'x-right'
    }

    return false
  }

  if (spritesWithBoxCollider.length > 0) {
    for (let index in spritesWithBoxCollider) {
      if (spritesWithBoxCollider[index] !== spriteId1 && checkCollisionX(spritesWithBoxCollider, spriteId1, newSpritePositionXId1, newSpritePositionYId1, spritesWithBoxCollider[index])) {
        return checkCollisionX(spritesWithBoxCollider, spriteId1, newSpritePositionXId1, newSpritePositionYId1, spritesWithBoxCollider[index])
      }
    }
  }

  return false
}

// Created this function because X axis was not being
// triggered before Y axis. Caused problems when colliding with side
export function checkCollisionY (
  spritesWithBoxCollider,
  spriteId1,
  newSpritePositionXId1 = null,
  newSpritePositionYId1 = null,
  spriteId2 = null
) {
  let spriteIdStyle1 = getStyle(spriteId1)
  let spriteBoundingBoxLeft1 = parseInt(spriteIdStyle1.left, 10)
  let spriteBoundingBoxRight1 = spriteBoundingBoxLeft1 + getWidth(spriteId1)
  let spriteBoundingBoxTop1 = parseInt(spriteIdStyle1.top, 10)
  let spriteBoundingBoxBottom1 = spriteBoundingBoxTop1 + getHeight(spriteId1)

  if (newSpritePositionXId1) {
    spriteBoundingBoxLeft1 = newSpritePositionXId1
    spriteBoundingBoxRight1 = spriteBoundingBoxLeft1 + getWidth(spriteId1)
  }

  if (newSpritePositionYId1) {
    spriteBoundingBoxTop1 = newSpritePositionYId1
    spriteBoundingBoxBottom1 = spriteBoundingBoxTop1 + getHeight(spriteId1)
  }

  if (spriteId2 !== null) {
    let spriteIdStyle2 = getStyle(spriteId2)
    let spriteBoundingBoxLeft2 = parseInt(spriteIdStyle2.left, 10)
    let spriteBoundingBoxRight2 = spriteBoundingBoxLeft2 + getWidth(spriteId2)
    let spriteBoundingBoxTop2 = parseInt(spriteIdStyle2.top, 10)
    let spriteBoundingBoxBottom2 = spriteBoundingBoxTop2 + getHeight(spriteId2)

    // These collisions refer to the object being collided with
    // (y-top = spriteId2 y-top)
    if (
      // check for y-top collision
      spriteBoundingBoxRight1 >= spriteBoundingBoxLeft2 &&
      spriteBoundingBoxRight2 >= spriteBoundingBoxLeft1 &&
      spriteBoundingBoxTop1 <= spriteBoundingBoxBottom2 - (spriteBoundingBoxBottom2 - spriteBoundingBoxTop2) - 1 &&
      spriteBoundingBoxTop2 - 1 <= spriteBoundingBoxBottom1
    ) {
      return 'y-top'
    } else if (
      // check for y-bottom collision
      spriteBoundingBoxRight1 >= spriteBoundingBoxLeft2 &&
      spriteBoundingBoxRight2 >= spriteBoundingBoxLeft1 &&
      spriteBoundingBoxTop1 <= spriteBoundingBoxBottom2 + 1 &&
      spriteBoundingBoxBottom2 + 1 <= spriteBoundingBoxBottom1
    ) {
      // console.log('y-bottom')
      return 'y-bottom'
    }

    return false
  }

  if (spritesWithBoxCollider.length > 0) {
    for (let index in spritesWithBoxCollider) {
      if (spritesWithBoxCollider[index] !== spriteId1 && checkCollisionY(spritesWithBoxCollider, spriteId1, newSpritePositionXId1, newSpritePositionYId1, spritesWithBoxCollider[index])) {
        return checkCollisionY(spritesWithBoxCollider, spriteId1, newSpritePositionXId1, newSpritePositionYId1, spritesWithBoxCollider[index])
      }
    }
  }

  return false
}

// export function playerSpriteAnimation (movement = null) {
// let spritesheetStyle = getStyle(CONSTANTS.PLAYER_SPRITESHEET)
// let spritesheetWidth = getWidth(CONSTANTS.PLAYER_SPRITESHEET)
// let amountOfSpriteFrames
// let currentSpritesheetPosition = parseFloat(spritesheetStyle.left, 10)
// let spritesheetFrameWidth
// let newSpritesheetPosition = currentSpritesheetPosition

//   amountOfSpriteFrames = CONSTANTS.PLAYER_SPRITESHEET_FRAMES
//   spritesheetFrameWidth = spritesheetWidth / amountOfSpriteFrames
//
//   newSpritesheetPosition -= spritesheetFrameWidth
//
//   if (movement === 'JUMP' || movement === 'JUMP_LEFT' || movement === 'JUMP_RIGHT') {
//     switch (movement) {
//       case 'JUMP_LEFT':
//         spritesheetStyle.transform = 'rotateY(180deg)'
//         spritesheetStyle.left = -(spritesheetWidth - (spritesheetFrameWidth * 2)) + 'px'
//         break
//
//       case 'JUMP_RIGHT':
//         spritesheetStyle.transform = 'rotateY(0)'
//         spritesheetStyle.left = -spritesheetFrameWidth + 'px'
//         break
//
//       default:
//         if (spritesheetStyle.transform === 'rotateY(180deg)') {
//           spritesheetStyle.left = -(spritesheetWidth - (spritesheetFrameWidth * 2)) + 'px'
//         } else {
//           spritesheetStyle.left = -spritesheetFrameWidth + 'px'
//         }
//     }
//   } else if (movement === 'MOVE_RIGHT') {
//     if (Math.round(Math.abs(newSpritesheetPosition)) >= spritesheetWidth ||
//     Math.round(Math.abs(newSpritesheetPosition)) < (2 * spritesheetFrameWidth)) {
//       spritesheetStyle.left = -(2 * spritesheetFrameWidth) + 'px'
//     } else {
//       spritesheetStyle.left = newSpritesheetPosition + 'px'
//     }
//
//     spritesheetStyle.transform = 'rotateY(0)'
//   } else if (movement === 'MOVE_LEFT') {
//     if (Math.round(Math.abs(newSpritesheetPosition)) >= spritesheetWidth - (3 * spritesheetFrameWidth) ||
//     Math.round(Math.abs(newSpritesheetPosition)) < 0) {
//       spritesheetStyle.left = 0 + 'px'
//     } else {
//       spritesheetStyle.left = newSpritesheetPosition + 'px'
//     }
//
//     spritesheetStyle.transform = 'rotateY(180deg)'
//   } else {
//     if (spritesheetStyle.transform === 'rotateY(180deg)') {
//       spritesheetStyle.left = -(spritesheetWidth - spritesheetFrameWidth) + 'px'
//     } else {
//       spritesheetStyle.left = '0px'
//     }
//   }
// }

export function movePlayerSpriteLeft (spritePositionX, ...spritesWithBoxCollider) {
  let [ ...spritesWithBoxColliderArray ] = spritesWithBoxCollider
  let newSpritePositionX = spritePositionX

  if (newSpritePositionX > 0) {
    newSpritePositionX -= CONSTANTS.PLAYER_MOVEMENT_SPEED
  }

  // Checks if the movement_speed put the sprite beyond gameboard bounds
  if (newSpritePositionX <= 0) newSpritePositionX = 0

  let collisionDetected = checkCollisionX(spritesWithBoxColliderArray, CONSTANTS.PLAYER_SPRITE, newSpritePositionX)
  if (collisionDetected === 'x-right') {
    newSpritePositionX = spritePositionX
  }

  return newSpritePositionX
}

export function movePlayerSpriteRight (spritePositionX, ...spritesWithBoxCollider) {
  let [ ...spritesWithBoxColliderArray ] = spritesWithBoxCollider
  let newSpritePositionX = spritePositionX
  let spriteWidth = getWidth(CONSTANTS.PLAYER_SPRITE)

  if (newSpritePositionX + spriteWidth < CONSTANTS.BOARD_WIDTH) {
    newSpritePositionX += CONSTANTS.PLAYER_MOVEMENT_SPEED
  }

  // Checks if the movement_speed put the sprite beyond gameboard bounds
  if (newSpritePositionX + spriteWidth >= CONSTANTS.BOARD_WIDTH) {
    newSpritePositionX = CONSTANTS.BOARD_WIDTH - spriteWidth
  }

  let collisionDetected = checkCollisionX(spritesWithBoxColliderArray, CONSTANTS.PLAYER_SPRITE, newSpritePositionX)
  if (collisionDetected === 'x-left') {
    newSpritePositionX = spritePositionX
  }

  return newSpritePositionX
}

export function movePlayerSpriteUp (spritePositionY, ...spritesWithBoxCollider) {
  let [ ...spritesWithBoxColliderArray ] = spritesWithBoxCollider
  let newSpritePositionY = spritePositionY

  newSpritePositionY -= CONSTANTS.PLAYER_JUMP_MOVEMENT_SPEED

  let collisionDetected = checkCollisionY(spritesWithBoxColliderArray, CONSTANTS.PLAYER_SPRITE, null, newSpritePositionY)
  if (collisionDetected === 'y-bottom') {
    newSpritePositionY = spritePositionY
  }

  return newSpritePositionY
}

export function movePlayerSpriteDown (spritePositionY, ...spritesWithBoxCollider) {
  // let [ ...spritesWithBoxColliderArray ] = spritesWithBoxCollider
  let newSpritePositionY = spritePositionY

  newSpritePositionY += CONSTANTS.PLAYER_JUMP_MOVEMENT_SPEED

  // let collisionDetected = checkCollision(spritesWithBoxColliderArray, CONSTANTS.PLAYER_SPRITE, null, newSpritePositionY)
  // if (collisionDetected === 'y-top') newSpritePositionY = spritePositionY

  return newSpritePositionY
}

export function centerCameraX (newSpritePositionX) {
  let middleOfScreen = (CONSTANTS.SCREEN_WIDTH - getWidth(CONSTANTS.PLAYER_SPRITE)) / 2
  let newCameraPositionX

  if (newSpritePositionX >= middleOfScreen) {
    newCameraPositionX = newSpritePositionX - middleOfScreen
  }

  if (newCameraPositionX + CONSTANTS.SCREEN_WIDTH > CONSTANTS.BOARD_WIDTH) {
    newCameraPositionX = CONSTANTS.BOARD_WIDTH - CONSTANTS.SCREEN_WIDTH
  }

  return -newCameraPositionX
}
