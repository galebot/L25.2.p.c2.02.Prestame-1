import Cl_mComerciante from "./Cl_mComerciante.js";
import Cl_mEstudiante from "./Cl_mEstudiante.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarEstudiante(data) {
        let mEstudiante = new Cl_mEstudiante(data);
        this.modelo.procesarCasaPrestamo(mEstudiante);
        this.reportarPersona({ mPersona: mEstudiante });
    }
    procesarComerciante(data) {
        let mComerciante = new Cl_mComerciante(data);
        this.modelo.procesarCasaPrestamo(mComerciante);
        this.reportarPersona({ mPersona: mComerciante });
    }
    reportarPersona({ mPersona }) {
        this.vista.reportarPersona({
            dataPersona: mPersona.toJSON(),
            solicitudes: this.modelo.solicitudes(),
            rechazados: this.modelo.rechazados(),
            aprobados100: this.modelo.aprobados100(),
            porcentajeCreditoAprobado: this.modelo.porcentajeCreditoAprobado(),
            porcentajeCreditoRechazado: this.modelo.porcentajeCreditoRechazado(),
        });
    }
}
