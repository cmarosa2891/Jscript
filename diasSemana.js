// - DÍAS DE LA SEMANA:
// Crear un array con todos los días de la semana
// Recorrerlos y mostrar cuando sea domingo o sábado un mensaje en consola.

console.warn(`Archivo diasSemana.js importado correctamente`)

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const recorrer = () => {
    dias.forEach(function(dia) { 
        console.log(dia)
        if (dia == 'Sábado') {
                                 console.log(`Supersábado!`)}
        if (dia == 'Domingo') {
        console.log(`Asado!`)} 
    })
}