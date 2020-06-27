const Bebida = require("./Bebida");
const {Bebida} = require('./Bebida');

class Cerveza extends Bebida{
    constructor(cantidad, porcentajeAlcohol){
        super(cantidad);
        thiis.alcohol = porcentajeAlcohol;
    };

    getPorcentajeAlcohol(){
        return this.porcentajeAlcohol;
    }
    setAlcohol(porcentajeAlcohol){
        this.porcentajeAlcohol = porcentajeAlcohol
    }
}

module.exports = {
    Cerveza
};