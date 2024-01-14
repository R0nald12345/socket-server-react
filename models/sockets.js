
class Sockets{

    constructor(io){
        this.io = io;
        this.socketEvents();
    }

    socketEvents(){

        //este socket sera del lado del servidor
        //socket que entra como parametro en arrow function es como un cliente que se conecta

        //On connection
        this.io.on('connection', (socket) => { 

            //Escuha desde el cliente
            //Escuchar evento: mensaje-to-server 
            socket.on('mensaje-to-server',(data)=>{
                console.log(data);
                this.io.emit('mensaje-to-server',data);
            })

        });



    }

}

module.exports = Sockets;