const Bebida = require("./Bebida");

const {Bebida} = require('./Bebida');

class Refresco extends Bebida{
    constructor(cantidad, azucar){
        super(cantidad);
        thiis.azucar = azucar;
    };

    getAzucar(){
        return this.azucar;
    }

    setAzucar(azucar){
        this.azucar = azucar;
    }
}
module.exports = {
    Refresco
};