let Negro = 0
let GiroDerecha = 0
let GiroIzquierda = 0
let Blanco = 1
basic.forever(function () {
    if (Negro == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 107)
        GiroIzquierda += 1
    } else {
        if (Negro == maqueen.readPatrol(maqueen.Patrol.PatrolRight)) {
            maqueen.motorStop(maqueen.Motors.M2)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 104)
            GiroDerecha += 1
        } else {
            while (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == Blanco && Blanco == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
                if (GiroDerecha == 1) {
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 102)
                } else {
                    if (GiroIzquierda == 1) {
                        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 102)
                    }
                }
            }
        }
    }
    GiroDerecha += 0
    GiroIzquierda += 0
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 174)
})
