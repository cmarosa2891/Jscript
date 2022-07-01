// Creación de objetos
const objPeliculas = {
    nombre: 'Up',
    descripcion: 'una peli de altura'


}

console.log(objPeliculas)

// Creación de clases

class Curso {
    constructor(titulo, dificultad) {
        this.titulo = titulo;
        this._dificultad = dificultad; // _ variable privada
        this.lecciones = [];
    }

    static BASE_URL = "desarrolloutil.com/cursos/";  //variable estática aplicada a todos los objetos creados a partir de la clase


    get dificultad() {
        return this._dificultad;        // _ variable privada
    }
    set dificultad(nuevaDificultad) {
        if(nuevaDificultad >=0 && nuevaDificultad <= 5){
            this._dificultad=nuevaDificultad;
        } else {
            console.log('no hacer nada')
        }
        return this.dificultad
    }
    agregarLeccion(leccion) {
        this.lecciones.push(leccion);
    }

    eliminarLeccion(leccion) {
        this.lecciones.pop();
    }
}

const cursoJS = new Curso('Javascript', 1)
const cursoTS = new Curso('Typescript', 3)

console.log(cursoJS, cursoTS);
console.log(cursoTS)

cursoJS.agregarLeccion('Intro a JS');
cursoJS.agregarLeccion('Variables');
cursoJS.agregarLeccion('Tipos de Datos');

console.log(cursoJS, cursoTS);
console.log(Curso.BASE_URL);