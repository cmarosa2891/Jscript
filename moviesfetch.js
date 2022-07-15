console.warn('moviesfetch.js cargado correctamente')
/*

let movieState = [];

const joinMovie = event2 => {
    event2.preventDefault()
    const movieName = document.querySelector('#movieName').value
    const movieYear = document.querySelector('#movieYear').value

    movieState.push({ movie: movieName, year: movieYear })

    console.log(movieState)
    document.getElementById("movies").innerHTML = ({ movieState })
}

*/


//Versión 2
const form = document.getElementById('form')
const movieContainer = document.getElementById('movies')
let movieState =[]
let i=0

const printMovieAndYear = movieState =>{
    const li=document.createElement('li')
    for(i;i<movieState.length;i++){
        li.appendChild(document.createTextNode(`${movieState[i].movie} - ${movieState[i].year}`))
        movieContainer.appendChild(li)
    }
}

form.addEventListener('submit', event=>{
    event.preventDefault()
    const movieName = document.querySelector('#movieName').value
    const movieYear = document.querySelector('#movieYear').value
    const message = document.querySelector('#message')

    movieState.push({movie: movieName, year: movieYear })
    printMovieAndYear(movieState)
//    movieState.length  <= 5 && printMovieAndYear(movieState)
    movieState.length === 5 && message.appendChild(document.createTextNode('Tiene buenos gustos'))
})