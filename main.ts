let value = 0
irRemote.connectInfrared(DigitalPin.P16)
let snelheid = 100
basic.showString("Hallo welkom bij bluetooth auto")
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    # # # # #
    . # . # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # # #
    . # # # #
    . . # . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . # #
    . . # # #
    . . . # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . #
    . . . # #
    . . . . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . #
    . . . . .
    `)
basic.clearScreen()
basic.forever(function () {
    value = irRemote.returnIrButton()
    if (value == 70) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, snelheid + 5)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, snelheid)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.white)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.white)
    } else if (value == 68) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 70)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 130)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.black)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.white)
    } else if (value == 67) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 130)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 70)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.black)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.white)
    } else if (value == 21) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, snelheid + 5)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, snelheid)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
    } else if (value == 64) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
        MiniCar.LED_OFF()
    } else if (value == 22) {
        snelheid = 50
    } else if (value == 25) {
        snelheid = 100
    } else if (value == 13) {
        snelheid = 175
    } else if (value == 12) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.blue1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.yellow)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.yellow)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
    }
})
