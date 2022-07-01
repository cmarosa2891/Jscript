console.warn(`Archivo sintaxisYcariables.js importado correctamente`)

let sYv=() =>{
const operador1 = prompt('Ingrese el primer operador para el cálculo')
const operador2 = prompt('Ingrese el segundo operador para el cálculo')
alert(`
Los operadores ingresados son ${operador1} y ${operador2}
La suma de los operadores es =  ${parseInt(operador1)+parseInt(operador2)}
`)
alert(`
Los operadores ingresados son ${operador1} y ${operador2}
La resta de los operadores es =  ${parseInt(operador1)-parseInt(operador2)}
`)
alert(`
Los operadores ingresados son ${operador1} y ${operador2}
La multiplicación de los operadores es =  ${parseInt(operador1)*parseInt(operador2)} 
`)
alert(`
Los operadores ingresados son ${operador1} y ${operador2}
La división de los operadores es =  ${parseInt(operador1)/parseInt(operador2)}
`)
}