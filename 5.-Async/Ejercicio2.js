const horas = [200, 232, 60, 121, 30, 300];
function haceAlgo (transforma, array){ 
    console.log(transforma(array.map((x) => x/60)))
}

const mayorADos = (elemento) => {return elemento > 2;};

haceAlgo((numeros) =>{
    return numeros.filter(mayorADos);
},horas);
