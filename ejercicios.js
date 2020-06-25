/*Ejercicio 1*/
const pinguino = {
    character: 'Pen2',
    origin: 'Neon Genesis Evangelion',
    note: 'pinguino cool',
    puedeVolar: false,
    
    saludar(){
        let saludo =`Hola, soy un pinguino y mi nombre es ${this.character}`;
        return saludo;
    },
   
    
};

/*Ejercicio 2*/
console.log(`Hola, soy un pinguino y mi nombre es ${pinguino.character}`);

/*Ejercicio 3*/
pinguino.puedeVolar = false;

/*Ejercicio 4*/

pinguino.getGraznar = function(){
    console.log('kaww kaww');
};

pinguino.getGraznar();

/*Ejercicio 5*/

console.log(pinguino.saludar());

/*Ejercicio 6*/
pinguino.character = 'Señor Pingu';
console.log(pinguino.saludar());

/*Ejercicio 7*/
pinguino.volar = function (){
    return this.puedeVolar == false?'No puedo volar :(':'¡Puedo volar!'
};
console.log(pinguino.volar());

/*Ejercicio 8*/
pinguino.puedeVolar = true;
console.log(pinguino.volar());

