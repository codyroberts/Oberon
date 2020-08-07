import * as PIXI from 'pixi.js'
import player from './objects/characters/player.js'

let keys = {}
let keysDiv

// Create and configure the game
const canvas = document.getElementById('game')

let _w = window.innerWidth
let _h = window.innerHeight

const game = new PIXI.Renderer({view: canvas, width: _w, height: _h, resolution: window.devicePixelRatio, autoDensity: true})
const stage = new PIXI.Container()
// Create the player
let user = new player(100, 100)

// Load assets
const loader = new PIXI.Loader()

loader.add("player", user.sprite)
    .load(onLoad)

let animatedOrc

function onLoad(loader, resources) {
    let animations = resources.player.spritesheet.animations
    animatedOrc = new PIXI.AnimatedSprite(animations["walking_down"])
    animatedOrc.animationSpeed = 0.08
    animatedOrc.play()
    animatedOrc.x = _w / 2
    animatedOrc.y = _h / 2
    animatedOrc.anchor.x = 0.5
    animatedOrc.anchor.y = 0.5
    stage.addChild(animatedOrc)

    ticker.add(gameLoop)
}

// To be abstracted out and modified for general use later
function controls() {
    if (keys["87"]) {
        animatedOrc.y -= 0.8
    }
    if (keys["83"]) {
        animatedOrc.y += 0.8
    }
    if (keys["68"]) {
        animatedOrc.x += 0.8
    }
    if (keys["65"]) {
        animatedOrc.x -= 0.8
    }
}

window.addEventListener("keydown", onKeyDown)
window.addEventListener("keyup", onKeyUp)
window.addEventListener("resize", resize)

const ticker = new PIXI.Ticker()
ticker.start()

function onKeyDown (e) {
    // console.log(e.keyCode)
    keys[e.keyCode] = true
}

function onKeyUp (e) {
// console.log(e.keyCode)
keys[e.keyCode] = false
}

function gameLoop() {

    controls()
    game.render(stage)
}

function resize() {
    _h = window.innerHeight
    _w = window.innerWidth

    game.resize(_w, _h)
}
