const fs = require('fs');
//fs es asincrono por eso se llama a una funcion cuando termina

//LEER CONTENIDO
console.log('Antes de leer el Archivo')

fs.readFile('index.html','utf-8', (err, contenido)=>err ? console.log(err) : console.log(contenido));

console.log('Despues de leer el Archivo')

//RENOMBRAR ARCHIVO
console.log('Antes de renombrar el archivo')
fs.rename('index.php' , 'index.html',(error )=> error ? console.error('error'): console.log(`cambio revertido` ) )
fs.rename('index.html' , 'index.php',(error )=> error ? console.error('error'): console.log(`cambio realizado` ) )
console.log('Despues de renombrar el archivo')


//Agregar contenido al final de un archivo
console.log('Antes Agregar contenido al final de un archivo')
fs.appendFile('index.html','<p>Hola</p>' , (err)=> err ? console.error(err) : console.log('agregado') )
console.log('Despues de Agregar contenido al final de un archivo')



//Reemplazar todo el contenido del archivo o crearlo si no existe (OJo)
console.log('Antes de Reemplazar todo el contenido del archivo o crearlo si no existe (OJo)')
fs.writeFile('index.html','contenido nuevo' , (err)=> err ? console.log(err) : console.log('contenido actualizado') )
console.log('Despues  de Reemplazar todo el contenido del archivo o crearlo si no existe (OJo)')


//ELIMINAR UN ARCHIVO
console.log('Antes de Eliminar un archivo')
//primero lo Creo
  //se le agrega SYNC para que sea inmediato y no como callback
  console.log('Creo el archivo')
  fs.writeFileSync('creado.php', '' , (err)=> err ? console.log(err) : console.log('contenido creado') )
  //Despues lo borro
  console.log('Borro el archivo')
  fs.unlink( 'creado.php' , (err)=> err ?  console.log('error al aliminar') : console.log('Archivo eliminado..') )


//NOTA
/*
SI QUISIERA QUE FUERA SINCRONO DEBRIA AGREGAR 
sync AL FINAL DE CADA SENTENCIA FS Y ELIMINAR EL CAllback de cada expresion


*/

