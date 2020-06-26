//Clase padre
class Largometraje {
    constructor(titulo, tipo, director, audiencia){
        this.titulo = titulo;
        this.tipo = tipo;
        this.director = director,
        this.audiencia = audiencia;        
    };

    getDuracion(){
        return 'La duracion es de 60 min'
    }

}

module.exports = {
    Largometraje,
};