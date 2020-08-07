import * as PIXI from 'pixi.js'
import character from './character.js'

export default class player extends character {
    constructor(health, mana) {
        super(health, mana)
        this.health = health
        this.mana = mana
        this.x = 0
        this.y = 0
        this.sprite = "/lib/sprites/enemies/orc.json"
    }
}