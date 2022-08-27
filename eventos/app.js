const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', ()=>{
    console.log('Ocurrio una compra')
})



emisorProductos.emit('compra');