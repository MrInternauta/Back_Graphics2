
import { Router, Request, Response } from 'express';
import Server from '../classes/server';
import { } from '../sockets/socket';
import { graficaData } from '../classes/grafica';

const router = Router();
const grafica = new graficaData();


router.get('/grafica', ( req: Request, res: Response  ) => {

    res.json(grafica.getdata());

});

router.post('/grafica', ( req: Request, res: Response  ) => {

    const pregunta = Number(req.body.pregunta);
    const respuesta: Number = Number( req.body.respuesta);


    grafica.responder_pregunta(pregunta, respuesta);
    const server = Server.instance;
    server.io.emit("grafica", grafica.getdata());


    res.json(grafica.getdata());

});


export default router;


