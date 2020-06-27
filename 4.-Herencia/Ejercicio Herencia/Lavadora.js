const {Electrodomestico} = require('./Electrodomestico');

class Lavadora extends Electrodomestico{
    constructor(precio, color, capacidad, carga){
        super(precio, color, capacidad);
        this.carga = carga;
    };
    precioFinal(){
        return this.consumoElectrico * this.carga;
    }
}

const lavadoraUno = new Lavadora(100, 'rojo', 100, 15);
console.log(lavadoraUno.precioFinal());