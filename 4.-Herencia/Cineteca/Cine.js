/*const objeto = {
    a:1,
    b:'hola',
    letra:'valor letra',
    caballo:'Veloz'
}

const {letra, caballo} = obajeto;
*/
const {Largometraje} = require('./Largometraje');

class Cine {
    constructor(nombre, sala){
        this.nombre = nombre;
        this.sala = sala;
    }
    reproducir(largometraje){
        const {titulo} = largometraje 
        return `Se esta reproduciendo el Largometraje ${titulo} en  ${this.nombre} en la sala ${this.sala}`;
    }
}

module.exports = {
    Cine,
};