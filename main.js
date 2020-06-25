//Definicion de Objeto literal
const persona1 = {
    //clave: valornm
    name: 'Mali',
    age:21,
    isHuman: true,

     getAge: () =>{
        return this.age;
    },
    setAge(age){
        this.age = age;
    }
};

console.log(`Hola soy ${persona1.name} tengo ${persona1.getAge}`);
