"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grafica_1 = require("../classes/grafica");
const graficadata = grafica_1.graficaData.instance;
// Escuchar mensajes
exports.GRAFICA = (cliente, io) => {
    cliente.on('grafica', () => {
        io.to(cliente.id).emit("grafica", graficadata.getdata());
    });
};
