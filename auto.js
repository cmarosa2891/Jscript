console.warn('auto.js cargado')

let auto = {
    color: 'negro',
    modelo: 'Trend',
    patente: 'KUC098',
    marca: 'Volkswagen',
    prendido: 0,
    velocidad: 0,
    velocidadMaxima: 160,

    encender() {
        auto.prendido = 1
        console.log(`El auto está encendido: ${auto.prendido}`)
        return (auto.prendido = 1)
    },

    acelerar() {
        if (auto.prendido === 1) {
            if (auto.velocidad < auto.velocidadMaxima) {
                auto.velocidad += 20
                console.log(`La velocidad actual es ${auto.velocidad}`)
            } else if (auto.velocidad >= auto.velocidadMaxima) {
                console.log('velocidad máxima alcanzada')
            }
        }
        else {
            console.log('El auto está apagado')
        }
    },

    mostrarVelocidadActual() {
        if (auto.prendido === 1) {
            console.log(`La velocidad actual es ${auto.velocidad}`)
        } else if (auto.prendido === 0) {
            console.log('El auto está apagado')
        }
    },

    frenar() {
        if (auto.prendido === 1) {
            if (auto.velocidad > 0) {
                auto.velocidad -= 20
                console.log(`La velocidad actual es ${auto.velocidad}`)
            } else if (auto.velocidad >= 0) {
                console.log('Auto detenido')
            }
        }
        else {
            console.log('El auto está apagado')
        }
    },

    apagar() {
        auto.prendido = 0
        console.log(`El auto está apagado: ${auto.prendido}`)
        return (auto.prendido = 0)
    }

}

