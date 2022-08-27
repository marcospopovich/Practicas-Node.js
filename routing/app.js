const http = require('http');

const cursos = require('./cursos');

const servidor = http.createServer((req, res)=>{
    const {method} = req; //extraigo el metodo con desestructuracion

    switch(method){
        case 'GET':
            return manejarSolicitodGet(req,res);
                     
            
         default:
            console.log(`El metodo ${method}  no puede ser manejado por el servidor`)   
    };

    function manejarSolicitodGet(req,res) {
        const path = req.url;

        if(path === '/'){
            res.statusCode = 200;
            res.end('Bienvenido a mi primer servidor y API creados on Node.js xD')
        }else if (path === '/cursos'){
            res.statusCode = 200;
            res.end(JSON.stringify(cursos.infoCursos));
        }
    }
    
});
const PUERTO = 3000;

servidor.listen(PUERTO , ()=>{

    console.log(`el servidor esta escuchando el puero ${PUERTO}`)

});