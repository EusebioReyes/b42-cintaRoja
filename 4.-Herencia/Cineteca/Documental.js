
const {Largometraje} = require('./Largometraje');

class Documental extends Largometraje{
    constructor(titulo, tipo, director, audiencia, genero, estilo){
        super(titulo, tipo, director, audiencia);
        this.genero = genero;
        this.estilo = estilo;
    };
    getlugarFilmacion(){
        return 'se filmo en tal lugar';
    }
}

module.exports = {
    Documental, 
};