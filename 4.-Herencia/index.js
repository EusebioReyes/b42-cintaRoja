class Animal{
    constructor(ojos, boca, extremidades){
        this.ojos = ojos;
        this.boca = boca;
        this.extremidades  = extremidades;
    };
}

class Persona{
    constructor(ojos, boca, extremidades){
        this.ojos = ojos;
        this.boca = boca;
        this.extremidades  = 4;
    };
    respirar(){
        console.log('snif');
    }
    pensar(){
        console.log('Estoy pensando');
    };
    hablar(){
        console.log('Blabla, como sea');
    }
}

class Mascota{
    constructor(ojos, boca, extremidades){
        this.ojos = ojos;
        this.boca = boca;
        this.extremidades  = 4;
        this.duenio = duenio;
        this.estaDomesticado = estaDomesticado;
    };
    respirar(){
        console.log('snif');
    }
    
}