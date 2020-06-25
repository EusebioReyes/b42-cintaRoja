class Cuenta{
    constructor(titular){
        this.titular = titular;
        this.cantidad = 10;;
        this.estado = true;
        
    };

    ingresar(ingreso){
        if(this.estado){
            if(this.cantidad + this.ingreso > 900){
                return 'No puede tener mas de 900 pesos en su cuenta';
            }else{
                this.cantidad = this.cantidad + ingreso;
                return `El total de su cuenta es ${this.cantidad}`;
            }
        }else{return 'Su cuenta esta bloqueada';}
       
        
    };
    retirar(retiro){
        if(this.estado){
            if(this.cantidad - ingreso < 10){
                return 'No puede tener menos de 10 pesos en su cuenta';
            }else{
                this.cantidad = this.cantidad + ingreso;
                return `El total de su cuenta es ${this.cantidad}`;
            }
        }else{return 'Su cuenta esta bloqueada';}
    };

    getCantidadEnCuenta(){
        return this.cantidad;
    }
    estadoCuenta(){
        return this.cuenta == true?'Su cuenta esta activa':'Su cuenta esta bloqueada';
    }
    
}
const cuenta1 = new Cuenta('Eusebio de Jesus')
console.log(cuenta1.getCantidadEnCuenta());
console.log(cuenta1.ingresar(10));
console.log(cuenta1.getCantidadEnCuenta());