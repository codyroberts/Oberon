import * as PIXI from 'pixi.js'
import orc from './assets/sprites/enemies/orc/front1.png'
// import player from './objects/characters/player.js'

// // Test loading a sprite
const texture = PIXI.Texture.from(orc)
const sprite = new PIXI.Sprite(texture)

// // Create and configure the game
const game = new PIXI.Application({width: 800, height: 600})
document.body.appendChild(game.view)
game.renderer.backgroundColor = 0x061639

game.stage.addChild(sprite)