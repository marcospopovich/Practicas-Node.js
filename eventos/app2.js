const estatusPedido = ()=> {
 return Math.random() < 0.5;
}

const miPedidoDePizza = new Promise((resolve,reject) => {
    setTimeout(() => {
        estatusPedido()? resolve('Pedido exitoso pizza en camino') : reject('ocurrio un error')
         
    }, 1000)
} )

miPedidoDePizza
    .then((mensajeDeConfirmacion)=> console.log(mensajeDeConfirmacion))

    .catch((mensajeDeError)=> console.log(mensajeDeError))