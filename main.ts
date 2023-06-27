let speed = 30
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
basic.forever(function () {
    if (Kitronik_Move_Motor.measure() > 20) {
        if (Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Right) < 150 && Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Left) > 150) {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Reverse, speed)
        } else if (Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Left) < 150 && Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Right) > 150) {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Reverse, speed)
        } else {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
        }
    } else {
        Kitronik_Move_Motor.stop()
    }
})
