class Persona{
    constructor(nombre, apellidos, fechaNacimiento , sexo, peso, altura){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        

    };
    calcularIMC(){
        return this.peso / this.altura;
    };
    //formato fecha: 27/06/1989  dd/mm/aaaa
    esMayorDeEdad(){
        return this.getEdad() > 18?'Mayor de Edad':'Menor de Edad';
    };

    getEdad(){
        const cumpleAnios = new DatePersona(this.fechaNacimiento);
        const hoy =new Date();
        return (hoy.getMonth() - cumpleAnios.mes) < 0?(hoy.getFullYear() -1) - cumpleAnios.anio:(hoy.getFullYear() ) - cumpleAnios.anio;
    }

    getRfc(){
        const cumpleAnios = new DatePersona(this.fechaNacimiento);

        let corta = this.nombre.split(" ");
        let primerNombre = corta[0];
        let apellidosRfc="";
        primerNombre = primerNombre.substring(0,1)
        corta = this.apellidos.split(" ");
        apellidosRfc = corta[0].substring(0,2) + corta[1].substring(0,1);
        

        return `${apellidosRfc.toUpperCase()}${primerNombre.toUpperCase()}${cumpleAnios.anioDuo}0${cumpleAnios.mes}0${cumpleAnios.dia}${this.sexo}`;
    }
}

class DatePersona{
    constructor(fechaNacimiento){
        this.fechaNacimiento = fechaNacimiento.split("/");
        const cumpleAnios = new Date(parseInt(this.fechaNacimiento[2]), parseInt(this.fechaNacimiento[1]), parseInt(this.fechaNacimiento[0])) 
        this.dia = cumpleAnios.getDay();
        this.mes = cumpleAnios.getMonth();
        this.anio = cumpleAnios.getFullYear();
        this.anioDuo = cumpleAnios.getYear()
    };
}



const persona1 = new Persona('Eusebio', 'Reyes Lopez', '27/06/1989', 'M', 78, 1.75)
const date1 = new DatePersona('27/06/1989');
console.log(persona1.getRfc());

console.log(date1.anioDuo);