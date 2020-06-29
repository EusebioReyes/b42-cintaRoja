//Crea una función llamada longestCountry(), esta función recibirá de parámetro un arreglo con nombres de distintos países, la función deberá retornar el país con mayor número de letras.

const paises = ["México", "Uru", "Panamá", "Guatemala", "El Salvador"]

const longestCountry = (array) =>{
    return array.sort();
}

let ordenaPais = longestCountry(paises);

console.log(ordenaPais);