const carro = {
    color: 'rojo',
    velocidad: 30,
    ruedas: 4,
    motor: 'V6',
    arranca() {
        console.log('ruun ruun');
    },
    frena(){
        console.log('iiiiiii');
    },
    dobla(){
        console.log('doblando');
    }
}

class Carro{
    constructor(color, velocidad, ruedas, motor, tipoRuedas){
        this.duenio = duenio;
        this.color = color;
        this.velocidad = velocidad;
        this.ruedas = ruedas;
        this.motor = motor;
        this.tipoRuedas = tipoRuedas
        this.vendido = false
    };
    arranca() {
        console.log('ruun ruun');
    };
    frena(){
        console.log('iiiiiii');
    };
    dobla(){
        console.log('doblando');
    };
}

class Rueda{
    constructor(rin,rodada){
        this.rin = rin;
        this.rodada = rodada
    };

}

const carro1 = new Carro('rojo', 30, 4, 'V4', new Rueda('aluminio',17), 'V4'); 
console.log(carro1);