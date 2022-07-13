console.warn('objetoPeliculas2.js cargado')

const mispelis = [
    {
        id: 1,
        title: "Batman Return",
        year: 1992
    },
    {
        id: 2,
        title: "Batman Forever",
        year: 1997
    },
    {
        id: 3,
        title: "Batman Begins",
        year: 2004
    }
]

mispelis.push(id = 4, title = 'Wonder Woman 1984', year = 2020);
console.log(mispelis);

const getDato = () => {
    setTimeout(() => {
        console.log(mispelis)
    }, 1500)             // delay para datos externos - asincronía
}


const getDato2 = () => {
    return new Promise {
        (resolve, rejected) => {
            setTimeout(() => {
                resolve(mispelis)  //la parte del this que almacena el objeto
            }, 1500)
            // delay para datos externos - asincronía
        }
    }
}

getDato2()


/*
let listaPeliculas = []
let id = 0
class Pelicula {
    constructor(title, description, year, duration, cast, director) {
        this.id = id++;
        this.title = title;
        this.description = description;
        this.year = year;
        this.duration = duration;
        this.cast = [cast];
        this.director = director


    }


    get id() {
        return this.id;        // _ variable privada
    }

    set id(id) {
        if (id === undefined) {
            return this.id++;        // _ variable privada
        } else {
            console.log('id ya ingresado')
        }
    }

    cambiarTitle(title) {
        this.title = title
    }
    cambiarDescripcion(description) {
        this.description = description
    }
    cambiarYear(year) {
        this.year = year
    }
    cambiarDuration(duration) {
        this.duration = duration
    }
    agregarCast(cast) {
        this.cast.push(cast)
    }

    eliminarCast(cast) {
        this.cast.pop()
    }

    cambiarDirector(director) {
        this.director = director
    }
}

*/
