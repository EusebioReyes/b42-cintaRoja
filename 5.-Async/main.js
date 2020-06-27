function getUsuarios(calllback,exito){
    //simular coonsulta un API
    const usuarios = [
    {
        name: 'Mali'
    },
    {
        name: 'Ernesto'
    },
    {
        name: 'Eusebio'
    }

];
    setTimeout(() =>{
        //status
        if(exito){
            calllback(usuarios, '200 todo chidori');
        } else {
            calllback(usuarios, '400 nada chidoo');
        }
       
    },3000)
}

// getUsuarioos(function callback(usuarios, mensaje))
getUsuarios((user, mensaje) => {
    console.log(user, mensaje);
}, true);

//Checar clase array y string