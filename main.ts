let Temp = 0
basic.forever(function () {
    Temp = input.temperature()
    if (Temp == 10) {
        basic.showNumber(Temp)
        basic.showIcon(IconNames.SmallDiamond)
    } else if (Temp == 20) {
        basic.showNumber(Temp)
        basic.showIcon(IconNames.Happy)
    } else if (Temp == 30) {
        basic.showNumber(Temp)
        basic.showIcon(IconNames.Umbrella)
    } else if (Temp == 40) {
        basic.showNumber(Temp)
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showNumber(Temp)
    }
})
