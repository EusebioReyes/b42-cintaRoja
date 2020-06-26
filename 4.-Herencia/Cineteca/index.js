const { Cine } = require('./Cine');
const { Documental } = require('./Documental');
const { Pelicula } = require('./Pelicula');

//titulo, tipo, director, audiencia, clasificacion,  actorPrincipal
const cinemex = new Cine('Cinemex', 2);
const pelicula1 = new Pelicula('Volver al futuro','Ficcion', 'Robert Zemeckis', 'Todas las edades', 'AA', 'Michael J. Fox');
const documental1 = new Documental('Cosmos', 'documental de naturaleza', 'Neil deGrasse Tyson','Familiar', 'Universo','Imagen real' );
//Reproducir su pelicula favorita
console.log(cinemex.reproducir(pelicula1));


//Reproducir documental de Cosmos

console.log(cinemex.reproducir(documental1));


