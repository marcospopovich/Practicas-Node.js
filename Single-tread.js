'use strict'

function singleThread()
{
    console.log('==========================================');
    console.log('           El Proceso De Node.js          ');
    console.log('Id del Proceso..............' + process.pid);
    console.log('Titulo......................' + process.title);
    console.log('Directorio de Node..........' + process.execPath);
    console.log('Directorio Actual...........' + process.cwd());
    console.log('Version de Node.............' + process.version);
    console.log('Versiones de Dependencias...' + process.versions);
    console.log('Plataforma (S.O.)...........' + process.platform);
    console.log('Arquitectura (S.O.).........' + process.arch);
    console.log('Tiempo activo de Node.......' + process.uptime());
    console.log('Argumentos del Proceso......' + process.argv);

}

singleThread();

