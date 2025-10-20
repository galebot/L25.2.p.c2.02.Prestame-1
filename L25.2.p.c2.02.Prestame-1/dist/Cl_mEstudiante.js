import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mEstudiante extends Cl_mPersona {
    constructor(data) {
        super({ cedula: data.cedula, nombre: data.nombre, edad: data.edad, sexo: data.sexo, edoCivil: data.edoCivil });
        this._nota = 0;
        this._nota = data.nota;
    }
    set nota(nota) {
        this._nota = +nota;
    }
    get nota() {
        return this._nota;
    }
    porcentajeCreditoAprobado() {
        if (this.edad < 20 && this.nota > 17) {
            return 100;
        }
        else if (this.edad >= 20 && this.edoCivil === 2 && this.nota > 15) {
            return 100;
        }
        else {
            return 0;
        }
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { persona: "Estudiante", nota: this.nota });
    }
}
