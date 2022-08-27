const promesaCumlida = true

const miPromesa = new Promise(( resolve, reject )=>{

    setTimeout(()=>{

        if (promesaCumlida) {
            resolve('Promesa Cumplida')
        }else{
            reject('promesa rechazada...')
        }
    }, 3000)

});

//funcion 1
const cumplida = (valor)=>console.log(valor)
//funcion 2
const rechazada = (rechazo)=>console.log(rechazo)

miPromesa.then(cumplida , rechazada);