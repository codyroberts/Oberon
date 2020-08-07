import * as PIXI from 'pixi.js'

// Orc
const loader = PIXI.Loader.shared.add("/lib/sprites/enemies/orc.json").load(setup)

export let orc
function setup() {
    orc = loader.resources["/lib/sprites/enemies/orc.json"]
}

console.log(orc)