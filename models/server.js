
//Servidor de Express
const express   = require('express');

//Servidor de Sockets
const http     = require('http');

const socketio = require('socket.io');

const path     = require('path');
const Sockets  = require('./sockets');


class Server {

    constructor(){
        this.app = express(); //necesitamos hacer esto para desplegar el directorio publico
        this.port = process.env.PORT;

        //https server
        this.server =  http.createServer(this.app);


        //Configuracion del Socket Server
        this.io = socketio(this.server, {/*Configuraciones */});
        
    }

    middlewares(){
        //Desplegar el directorio Público
        this.app.use(express.static(path.resolve(__dirname, '../public')))

    }

    configurarSockets(){
        new Sockets(this.io);
    }

    execute(){

        //Inicializar Middlewares
        this.middlewares();


        //Inicializar Socket
        this.configurarSockets();


        //Inicializar el server
        this.server.listen(this.port, ()=>{
            console.log('Server corriendo en puerto:', this.port);
        });
    }

}

module.exports = Server;