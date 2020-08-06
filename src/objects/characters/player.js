import  {Loader} from 'pixi.js'
import character from './character.js'

const loader = Loader.shared
loader.add("../../assets/sprites/enemies/orc/sheet.png")

export default class player extends character {
    constructor(health, mana, sprite) {
        this.health = 10
        this.mana = 5
        this.sprite = new PIXI.Sprite(
            loader.resources["../../assets/sprites/enemies/orc/sheet.png"].texture
          )
    }
}