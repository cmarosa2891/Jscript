console.warn(`Archivo integradorFacil.js importado correctamente`)
const dias2 = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const integrador = () => {

  const ingreso = prompt('Ingrese el día de la semana a evaluar')

  console.log(`El día ingresado es ${ingreso}`)


  dias2.forEach(function (dia2) {

    switch (ingreso) {

      case 'Lunes':
        console.log(`El día es hábil`);
        break;
      case 'Martes':
        console.log(`El día es hábil`);
        break;
      case 'Miércoles':
        console.log(`El día es hábil`);
        break;
      case 'Jueves':
        console.log(`El día es hábil`);
        break;
      case 'Viernes':
        console.log(`El día es hábil`);
        break;
      case 'Sábado':
        console.log(`El día es fin de semana`);
        break;
      case 'Domingo':
        console.log(`El día es fin de semana`);
        break;


    }

    // console.log(`El día ingresado es ${ingreso}`)
    // if (ingreso in ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']) {
    //   console.log(`El día es hábil`)
    // } else if (ingreso in ['Sábado', 'Domingo']) {
    //   console.log(`El día es fin de semana`)
    // }
  })
}




