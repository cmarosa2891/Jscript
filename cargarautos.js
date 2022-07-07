console.warn('cargarautos.js cargado')

/*
CREAR UNA FUNCIÓN PARA CARGAR AUTOS EN UN CAMIÓN:
El auto tendrá que tener al menos patente y peso
El camión tiene un peso máximo de carga
El objeto camión deberá validar con cada auto ingresado si está por debajo del peso o si ya no lo puede agregar
Además de almacenar los autos debe tener la posibilidad de validar que
no tenga patentes repetidas y que me devuelva todas las patentes que tiene a bordo.*/

const camion = {
    pesom: 25000,
    pesocarga: 0,
    patentes: [],

    cargarauto(pesoauto, patente) {

        if ((pesoauto + this.pesocarga < this.pesom) && (!this.patentes.includes(patente))) {   //patente !== this.patentes.find(patente) && 
            alert(`Se procederá con la carga del auto patente: ${patente} peso: ${pesoauto} `)
            this.pesocarga = this.pesocarga + pesoauto
            this.patentes.push(patente)
        } else {
            if (this.patentes.includes(patente)) {
                alert('vehículo ya cargado')
            } else {
                alert(`No se procederá con la carga. Carga actual ${this.pesocarga} peso vehículo: ${pesoauto} peso máximo: ${this.pesom} - Excedente: ${this.pesom - this.pesocarga + pesoauto}`)
            }
        }
    },

    listaautos() {
        console.log(this.patentes)
    },

    consultapantentes(patverificar) {
        if (this.patentes.includes(patverificar)) {
            alert('vehículo ya cargado')
        } else {
            alert('vehículo no encontrado')
        }
    }
}

class autos {
    constructor(pesoa, patente) {
        this.pesoa = pesoa;
        this.patente = patente
    }
}
