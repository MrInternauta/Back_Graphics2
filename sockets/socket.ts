import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { graficaData } from '../classes/grafica';

const graficadata = graficaData.instance;



// Escuchar mensajes
export const GRAFICA = (cliente: Socket ,io: socketIO.Server ) => {
    cliente.on('grafica', () => {
        io.to(cliente.id).emit("grafica", graficadata.getdata());
    });

      
    
    
  


}


