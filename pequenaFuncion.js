console.warn('pequenaFuncion.js cargado correctaemnte')
const nombreApellido = () => {
    let nombre = prompt('Ingrese su nombre')
    let apellido = prompt('Ingrese su apellido')
    console.log(`El nombre ingresado es ${nombre.toLocaleUpperCase()} ${apellido.toUpperCase()}`)
}


const evaluaDia = () => {

    let diaEvaluado = prompt('Ingrese el día a evaluar')

    const diaEs = {
        sabado:     'Fin de semana',
        domingo:    'Fin de semana',
        lunes:      'Día hábil',
        martes:     'Día hábil',
        miercoles:  'Día hábil',
        jueves:     'Día hábil',
        viernes:    'Día hábil'
}
    const resultado = evaluaDia[diaEvaluado]
    console.log(resultado)

}