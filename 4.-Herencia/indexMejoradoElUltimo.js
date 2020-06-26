class Animal{
    constructor(ojos, boca, extremidades){
        this.ojos = ojos;
        this.boca = boca;
        this.extremidades  = extremidades;
    };
}

class Persona extends Animal{
    constructor(ojos, boca, extremidades, idioma){
        super(ojos, boca, extremidades);
        this.idioma = idioma;
    }
    pensar(){
        console.log('Estoy pensando');
    };
    hablar(){
        console.log('Blabla, como sea');
    }
}


class Mascota{
    constructor(ojos, boca, extremidades, duenio){
        this.duenio = duenio;
        this.estaDomesticado = true;
    };
    respirar(){
        console.log('respiro coomo mascota');
    }  
}

class Perro extends Mascota{
    constructor(){
        super(ojos, boca, extremidades, duenio);
    };

}
const persona = new Persona(2, 1, 4, 'español');
const persona = new Persona(2, 1, 4, 'español');

console.log(persona);
