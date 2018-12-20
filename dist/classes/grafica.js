"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class graficaData {
    constructor() {
        this.preguntas = ["pregunta1", "pregunta2", "pregunta3", "pregunta4"];
        this.valores_si = [0, 0, 0, 0];
        this.valores_no = [0, 0, 0, 0];
    }
    static get instance() {
        return this._intance || (this._intance = new this());
    }
    getdata() {
        return [{ data: this.valores_si, label: "Si" }, { data: this.valores_no, label: "No" }];
    }
    responder_pregunta(pregunta, respuesta) {
        if (pregunta < this.preguntas.length) {
            if (respuesta >= 1) {
                this.valores_si[pregunta]++;
            }
            else {
                this.valores_no[pregunta]++;
            }
        }
        return this.getdata();
    }
}
exports.graficaData = graficaData;
