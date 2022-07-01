console.warn('objetoPeliculas.js cargado')

let listaPeliculas = []
let id=0
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
        if (id === undefined){
            return this.id++;        // _ variable privada
        } else {
            console.log('id ya ingresado')
        }
    }
    
    cambiarTitle (title){
        this.title = title
    }
    cambiarDescripcion (description){
        this.description = description
    }
    cambiarYear (year){
        this.year = year
    }
    cambiarDuration (duration){
        this.duration = duration
    }
    agregarCast (cast){
        this.cast.push(cast)
    }

    eliminarCast (cast){
        this.cast.pop()
    }

    cambiarDirector (director){
        this.director = director
    }
}

