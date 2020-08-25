enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const bumper = SpriteKind.create()
    export const flier = SpriteKind.create()
    export const goal = SpriteKind.create()
    export const coin = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.flier, function (sprite, otherSprite) {
    let invincibilityPeriod = 0
    info.changeLifeBy(-1)
    coin.say("ow!", invincibilityPeriod * 1.5)
    music.powerDown.play()
    pause(invincibilityPeriod * 1.5)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    lina,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.over(true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    lina,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    true
    )
})
info.onCountdownEnd(function () {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    lina,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    lina,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    tiles.placeOnRandomTile(coin, myTiles.transparency16)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    luci.destroy()
    tiles.placeOnRandomTile(luci, myTiles.transparency16)
})
function createEnemis () {
    for (let value of scene.getTilesByType(2)) {
        bumper = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 7 . . . 7 . . . 7 . . . 
            . . . . . 7 . . 7 . . 7 . . . . 
            . . . . . . 7 . 7 . 7 . . . . . 
            . . . . . f 7 7 7 7 7 f . . . . 
            . 7 . . . 7 f 7 7 7 f 7 . . . . 
            . . 7 . 7 7 7 f 7 f 7 7 7 . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . . . 7 7 f 7 7 7 f 7 7 . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . 7 . 7 7 f f f f 7 7 7 . 7 . 
            . 7 . . . 7 7 7 7 7 7 7 . . . 7 
            . . . . . . 7 . . . 7 . . . . . 
            . . . . . 7 . . . 7 . . . . . . 
            . . . . 7 . . . 7 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        scene.place(value, bumper)
        bumper.ay = 0
        if (Math.percentChance(50)) {
            bumper.vx = randint(30, 60)
        } else {
            bumper.vx = randint(-60, -30)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    let covid_19: Sprite = null
    covid_19.destroy()
    info.changeLifeBy(-1)
})
let moving = false
let bumper: Sprite = null
let coin: Sprite = null
let luci: Sprite = null
let lina: Sprite = null
game.splash("juntas a la distancia", "by : programadoras")
game.showLongText("ayudame a recoger a mi amigA y pasa de nivel", DialogLayout.Bottom)
music.playMelody("C D E F G A B C5 ", 311)
scene.setBackgroundImage(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `)
lina = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
info.setLife(5)
controller.moveSprite(lina, 100, 100)
tiles.setTilemap(tiles.createTilemap(hex`200020000f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0e0f0f0f100f0f0f0f0f0f0f0f0f0f0f100f0f0f0f0f0f0f100f0f0f0f0f0f0f0f0f0f04050505050505050505050505050a0f0f0f0a0505050505050505060f0f0f0f010e0e0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0e0e0e0e090f0f0f0f010f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0e0e0e0e090f0f0f0f010f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f070f0f0f0e0e090f0f0f0f01100405050505050505050505060f0f100f0f0f0f070f0f0f0e0e090f0f0f0f011001101010100f1010101010070f0f0f0f0f0f0f070f0f0f0f0f090f0f0f0f0110010f0f0405050505050610070e0e0e0e0e0e0e070f0f0f0f0f090f0f0f0f011001100f011010100f110910070e0e0e0e0e0e0e070f0f0f0f0f09100f0f0f0110010f0f0110011010100910070e0e0505050e0e070f0f0f0f0f090f0f0f0f0110010f0f0110010f0f0f09100703030303030303080f0f0f0f0f090f0f100f0110010f0f0110010e0e0e0910070f0f0f0f0f0f0f070f0f0f0f0f090f0f0f0f0110010f0f0110020303030810070f0f0f0f0f0f0f070f0f0f0f0f0b0f0f0f0f0110010f0f0110101010101010070f0f0f0f0f0f0f070f0f100f0f0f0f0f0f0f0110010f0f0203030303030303080f0f0f0f0f0f0f070f0f0f0f0f0f0f0f0f0f011001100f0f0f0f0f0f070f0f0f0f0f0405050505070f0f0f0f0f0b0f0f0f0f0110010f0f0f0f0f0f0f070f0f0f0f0f010f0f0f0f070f0f0f0f0f090f0f0f0f0110010f0f010f0f0f0f070f0f0f0f0f010f0f0f0f070f0f0e0e0e090f0f0f0f0110010f0f010f0f0f0f070f0f0f0f0f0f0f0f0f0f070f0f0f0f0f090f0f0f0f0110010f0f010f0f100f070f100f0f0f0f0f0f0f0f070f0f0f0f0f090f0f0f0f0110010f0f010f0f0f0f070f0f0f0f040c0c0c0c0c080f0f0f0f0f090f0f0f0f0110010f0f0203030303080f0f0f0f070f0f0f0f0f0f0f100f0f0f090f0f0f0f0110010f0f0f0f010f0f0f0f0f0f0f070f0f0f0f0f0f0f0f0f0f0f090f0f0f0f0110010f100f0f010f0f0f0f0f0f0f070f0f0f0f0f0f0f0f0f0f0f090f0f0f0f0110010f0f0f0f010f0f0f0f0f0f0f070f0f0d0d0d040d0d0f0f0f090f0f0f0f0110010f0f030302030303030f0f0f0f0f0f0f0f0e010f0f0f0f0f090f0f0f0f010e010f0f0f0f0f0f0f0f0f0f0f100f0f0f0f0f0e010f0f0f0f0f090f0f0f0f010e010f0f0f0f0f100f0f0f0f0f0f0f0f0f0f0f0e010f0f0f100f090f0f0f0f020302030303030303030303030303030303030303030303030303080f0f0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 
    . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 
    . . 2 . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . 
    . . 2 . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 2 . . . . . 2 . . 
    . . 2 . 2 . . . . . . . . . . 2 . . . . . . . 2 . . . . . 2 . . 
    . . 2 . 2 . . 2 2 2 2 2 2 2 . 2 . . . . . . . 2 . . . . . 2 . . 
    . . 2 . 2 . . 2 . . . . . 2 . 2 . . . . . . . 2 . . . . . 2 . . 
    . . 2 . 2 . . 2 . 2 . . . 2 . 2 . . 2 2 2 . . 2 . . . . . 2 . . 
    . . 2 . 2 . . 2 . 2 . . . 2 . 2 2 2 2 2 2 2 2 2 . . . . . 2 . . 
    . . 2 . 2 . . 2 . 2 . . . 2 . 2 . . . . . . . 2 . . . . . 2 . . 
    . . 2 . 2 . . 2 . 2 2 2 2 2 . 2 . . . . . . . 2 . . . . . 2 . . 
    . . 2 . 2 . . 2 . . . . . . . 2 . . . . . . . 2 . . . . . . . . 
    . . 2 . 2 . . 2 2 2 2 2 2 2 2 2 . . . . . . . 2 . . . . . . . . 
    . . 2 . 2 . . . . . . . 2 . . . . . 2 2 2 2 2 2 . . . . . 2 . . 
    . . 2 . 2 . . . . . . . 2 . . . . . 2 . . . . 2 . . . . . 2 . . 
    . . 2 . 2 . . 2 . . . . 2 . . . . . 2 . . . . 2 . . . . . 2 . . 
    . . 2 . 2 . . 2 . . . . 2 . . . . . . . . . . 2 . . . . . 2 . . 
    . . 2 . 2 . . 2 . . . . 2 . . . . . . . . . . 2 . . . . . 2 . . 
    . . 2 . 2 . . 2 . . . . 2 . . . . 2 2 2 2 2 2 2 . . . . . 2 . . 
    . . 2 . 2 . . 2 2 2 2 2 2 . . . . 2 . . . . . . . . . . . 2 . . 
    . . 2 . 2 . . . . 2 . . . . . . . 2 . . . . . . . . . . . 2 . . 
    . . 2 . 2 . . . . 2 . . . . . . . 2 . . . . . . . . . . . 2 . . 
    . . 2 . 2 . . . . 2 . . . . . . . 2 . . 2 2 2 2 2 2 . . . 2 . . 
    . . 2 . 2 . . 2 2 2 2 2 2 2 . . . . . . . . . 2 . . . . . 2 . . 
    . . 2 . 2 . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . 
    . . 2 . 2 . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.hazardLava0,myTiles.tile3,myTiles.tile1,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen))
scene.cameraFollowSprite(lina)
tiles.placeOnRandomTile(lina, myTiles.transparency16)
lina.setPosition(12, 15)
luci = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Food)
luci.setPosition(147, 121)
info.setScore(0)
info.startCountdown(90)
info.changeScoreBy(1)
for (let value of tiles.getTilesByType(myTiles.tile1)) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 4 4 4 4 4 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 4 4 4 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coin)
    animation.runImageAnimation(
    coin,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 4 4 4 4 4 4 5 5 f . . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f 5 5 5 4 4 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 4 4 4 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 4 4 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . f 5 4 5 5 f . . . . . . 
        . . . f 5 4 5 5 5 5 f . . . . . 
        . . . f 5 4 5 5 5 5 f . . . . . 
        . . . f 5 4 5 5 5 5 f . . . . . 
        . . . f 5 4 5 5 5 5 f . . . . . 
        . . . f 5 4 5 5 5 5 f . . . . . 
        . . . f 5 4 5 5 5 5 f . . . . . 
        . . . f 5 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . . f 5 f . . . . . . . . 
        . . . . . f 5 f . . . . . . . . 
        . . . . f 5 4 5 f . . . . . . . 
        . . . . f 5 5 5 f . . . . . . . 
        . . . . f 5 5 5 f . . . . . . . 
        . . . . f 5 5 5 f . . . . . . . 
        . . . . f 5 5 5 f . . . . . . . 
        . . . . f 5 5 5 f . . . . . . . 
        . . . . f 5 5 5 f . . . . . . . 
        . . . . . f 5 f . . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, myTiles.tile3)
}
game.onUpdate(function () {
    if (lina.tileKindAt(TileDirection.Bottom, sprites.dungeon.hazardLava0)) {
        lina.setPosition(12, 15)
        info.changeLifeBy(-1)
    }
})
game.onUpdate(function () {
    moving = controller.left.isPressed() || (controller.up.isPressed() || (controller.right.isPressed() || controller.down.isPressed()))
    if (!(moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, lina)
    }
})
