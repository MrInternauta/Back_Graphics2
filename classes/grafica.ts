 export class graficaData {
          private preguntas: string[];
          private valores_si: number[];
          private valores_no: number[];
          private static _intance: graficaData;
          constructor() {
            this.preguntas = ["pregunta1", "pregunta2", "pregunta3", "pregunta4"];
            this.valores_si = [0, 0, 0, 0];
            this.valores_no = [0, 0, 0, 0];
          }
          public static get instance() {
            return this._intance || (this._intance = new this());
          }

          public getdata() {
            return [{ data: this.valores_si, label: "Si" }, { data: this.valores_no, label: "No" }];
          }
          public responder_pregunta(pregunta: number, respuesta: Number) {
            if (pregunta < this.preguntas.length) {
              if (respuesta >= 1) {
                this.valores_si[pregunta]++;
              } else {
                this.valores_no[pregunta]++;
              }
            }
            return this.getdata();
          }
        }
