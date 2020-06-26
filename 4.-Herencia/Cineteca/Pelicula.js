// Agregar 1 método y dos cracterísticas extras diferentes de las de largometraje y documental

const {Largometraje} = require('./Largometraje');

class Pelicula extends Largometraje{
    constructor(titulo, tipo, director, audiencia, clasificacion,  actorPrincipal){
        super(titulo, tipo, director, audiencia);
        this.clasificacion = clasificacion;
        this.actorPrincipal = actorPrincipal;
        
    };
    
    getCriticas(){
        return 'Las criticas son buenas';
    }

}

module.exports = {
    Pelicula, 
};