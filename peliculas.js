console.warn('peliculas.js cargado correctamente')
// La película deberá tener un ID y un Título
let movies = [
    { title: 'Shrek', id: 4 },
    { title: 'Madagascar', id: 14 },
    { title: 'Alladin', id: 24 },
    { title: 'Spiderman no way home', id: 3 },
    { title: 'The Matrix', id: 5 },
    { title: 'Lo que el viento se llevó', id: 1 }
];

let peli = 'title'
let idPeli = 0

const peliculas = () => {
    console.table(movies);
}
const ingresaPeli = () => {
    peli = prompt('Ingrese el título de la pelicula a agregar')
    idPeli = prompt('Ingrese el ID de la pelicula')
    console.log(`Se ingresó la película ID ${idPeli} TITULO: ${peli}`)
}

// Crear una función que agregue una película al array de películas
const agregaPeli = () => {
    movies.push([peli, idPeli])
}

// Crear una función que evalúe antes de agregar que la película no fue ingresada previamente

const revisaPeli = () => {
    let existe = movies.find(o => o.title === peli)
    if (movies.find(o => o.title === peli)) {
        console.log(`La película ${peli} existe en el listado`)
    } else{
        console.log(`La película puede agregarse`)
    }
}


// Crear una función que ordene las películas por Título y por ID

const ordenaPeli = () => {
    movies.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))             // orden alfabético de títulos
    console.log('Lista de películas por título:')
    console.table(movies);

    movies.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))              // orden por id
    console.log('Lista de películas por id:')
    console.table(movies);
}

// Crear una función que elimine una película por su ID.
const eliminaPeli = () => {
    idPeli = parseInt(prompt('Ingrese idPeli a eliminar'))
    console.log(`ID de Pelicula a eliminar: ${idPeli}`)
    let chauIdPeli = movies.find(({ id }) => id === idPeli)
    console.log(chauIdPeli)
    movies = movies.filter(item => item !== chauIdPeli);
}