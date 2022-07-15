/* NOMBRE Y OPERACIONES:  Pasos:
Pedir nombre mediante prompt y disparar un alert con algún texto más
Pedir un número y sumarlo a otro que esté en una variable
Pedir un número y restarlo a otro que esté en una variable
Pedir un numero, luego otro y ambos sumarlos*/

console.warn('Archivo nombreYoperaciones.js importado correctamente')

// const button = document.createElement('button'); 
// button.type = 'button'; 
// button.innerText = 'Haz Click'; 
// document.body.appendChild(button);

let fijo = 5
let aviso = 0
let numsum = 0
let numrest = 0

const inicio = () => {
aviso = alert("Ingresar números a sumar y restar");
numsum = prompt('Ingrese número a sumar a FIJO')
console.log(`El resultado es ${fijo}+${numsum}=${parseInt(fijo)+parseInt(numsum)}`)
numrest = prompt('Ingrese número a restar a FIJO')
console.log(`El resultado es ${fijo}-${numrest}=${parseInt(fijo)-parseInt(numrest)}`)
}

function init() {
    let pTexto = document.getElementById("ej1").innerHTML = (`El resultado es ${fijo}+${numsum}=${parseInt(fijo)+parseInt(numsum)}`);

    document.getElementById("ej1").innerHTML = (`El resultado es ${fijo}-${numrest}=${parseInt(fijo)-parseInt(numrest)}`);
}


// Pedir un numero, luego otro y ambos sumarlos

let suma=()=>{
    let sum1=prompt('Ingrese el primer valor')
    let sum2=prompt('Ingrese el segundo valor')
    let resultado=alert(`La suma de ${sum1}+${sum2} es igual a ${parseInt(sum1)+parseInt(sum2)} `)

    document.getElementById("ej1").innerHTML = (`La suma de ${sum1}+${sum2} es igual a ${parseInt(sum1)+parseInt(sum2)} `);
}