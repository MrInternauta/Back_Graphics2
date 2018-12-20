"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = __importDefault(require("../classes/server"));
const grafica_1 = require("../classes/grafica");
const router = express_1.Router();
const grafica = new grafica_1.graficaData();
router.get('/grafica', (req, res) => {
    res.json(grafica.getdata());
});
router.post('/grafica', (req, res) => {
    const pregunta = Number(req.body.pregunta);
    const respuesta = Number(req.body.respuesta);
    grafica.responder_pregunta(pregunta, respuesta);
    const server = server_1.default.instance;
    server.io.emit("grafica", grafica.getdata());
    res.json(grafica.getdata());
});
exports.default = router;
