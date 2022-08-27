const ordenarProducto = (producto)=> console.log(producto)


async function realizarPedido(producto){
  try{
    const respuesta = await ordenarProducto(producto);
    console.log('Respuesta recibida')
    const respuestaProcesada = procesarPedido(respuesta)
    console.log(respuestaProcesada);
  
  }catch(error){
    console.log(error)
  }
  
}
realizarPedido('taza');