let DutyCycle = 0
let light = 0
let breakA = false
let breakB = false
let spinning = false
input.onButtonPressed(Button.A, () => {
    spinUp()
})
input.onButtonPressed(Button.B, () => {
    spinDown()
})
function spinUp()  {
    breakB = true
    breakA = false
    DutyCycle = 0
    while (DutyCycle <= 1023) {
        pins.analogWritePin(AnalogPin.P0, DutyCycle)
        DutyCycle += 1
        if (breakA) {
            break
        }
        basic.pause(10)
    }
    spinning = true
    basic.showIcon(IconNames.Yes)
}
function spinDown()  {
    breakA = true
    breakB = false
    DutyCycle = 1023
    while (DutyCycle > 0) {
        pins.analogWritePin(AnalogPin.P0, DutyCycle)
        DutyCycle += -1
        if (breakB) {
            break
        }
        basic.pause(10)
    }
    spinning = false
    basic.showIcon(IconNames.No)
}
spinning = false
control.inBackground(() => {
    while (true) {
        light = pins.analogReadPin(AnalogPin.P1)
        if (light > 300) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . # # # .
                . . # . .
                `)
            if (!(spinning)) {
                spinUp()
            }
        } else {
            basic.showLeds(`
                # # # . .
                . # # # .
                . . # # .
                . # # # .
                # # # . .
                `)
            if (spinning) {
                spinDown()
            }
        }
    }
})
