import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mComerciante extends Cl_mPersona {
    constructor(data) {
        super({ cedula: data.cedula, sexo: data.sexo, nombre: data.nombre, edad: data.edad, edoCivil: data.edoCivil });
    }
    porcentajeCreditoAprobado() {
        if (this.sexo === "M") {
            return 100;
        }
        else if (this.sexo === "F" && this.edoCivil === 2) {
            return 50;
        }
        else {
            return 0;
        }
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { persona: "Comerciante", nota: undefined });
    }
}
