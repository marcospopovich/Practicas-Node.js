let infoCurso = {
    "titulo": "aprende Node.js",
    "numVistas" : 455585,
    "numLikes": 21123,
    "temas":[
       "JavasCript",
       "Node.js"
    ],
    "esPublico" : true
   }

   //pasamos de un objeto a una cadena de caracteres
 let infoCursoJson = JSON.stringify(infoCurso);
 console.log(infoCursoJson)
 console.log( typeof infoCursoJson )

 //cadena de caracteres json a Objeto js

 let infoCursoParse = JSON.parse(infoCursoJson)
 console.log( infoCursoParse )
 console.log( typeof infoCursoParse )
