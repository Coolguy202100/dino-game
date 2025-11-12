input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.Y, -1)
    basic.pause(300)
    Player.change(LedSpriteProperty.Y, 1)
    basic.pause(200)
})
let Player: game.LedSprite = null
let Obstical = game.createSprite(4, 5)
Player = game.createSprite(1, 5)
game.setLife(3)
basic.forever(function () {
    Obstical.change(LedSpriteProperty.X, -1)
    basic.pause(200)
    if (Obstical.isTouching(Player)) {
        game.removeLife(1)
        Obstical.delete()
        basic.pause(randint(300, 2000))
        Obstical = game.createSprite(4, 5)
    } else if (Obstical.get(LedSpriteProperty.X) == 0) {
        Obstical.delete()
        basic.pause(randint(300, 2000))
        Obstical = game.createSprite(4, 5)
    }
})
