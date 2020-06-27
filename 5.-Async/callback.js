function funcionCual (callback){
    let texto = ' por priimera vez'
    console.log(callback(texto));

    setTimeout(() => {
        console.log('Se ejecuto setTimeOut')
    },3000);
    texto = ' Por segunda vez'
    console.log(callback(texto));
};

funcionCual((texto) =>{return "Me estoy ejecutando" + texto});