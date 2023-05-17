input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Number2 = randint(1, 3)
    if (Number2 == 1) {
        basic.showLeds(`
            . . . # .
            # . # . .
            . # . . .
            # . # . .
            . . . # .
            `)
    } else if (Number2 == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (Number2 == 3) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
let Number2 = 0
basic.showString("Agite!")
