import Cl_mCasaPrestamo from "./Cl_mCasaPrestamo.js";
import Cl_mComerciante from "./Cl_mComerciante.js";
import Cl_mEstudiante from "./Cl_mEstudiante.js";
import Cl_mPersona from "./Cl_mPersona.js";
import Cl_vCasaPrestamo from "./Cl_vCasaPrestamo.js";
import { iEstudiante, iComerciante } from "./_data.js"; 

export default class Cl_controlador {
  public modelo: Cl_mCasaPrestamo;
  public vista: Cl_vCasaPrestamo;
  
  constructor(modelo: Cl_mCasaPrestamo, vista: Cl_vCasaPrestamo) {
    this.modelo = modelo;
    this.vista = vista;
  }
  
  procesarEstudiante(data: iEstudiante) {
   
    let mEstudiante = new Cl_mEstudiante(data); 
    this.modelo.procesarCasaPrestamo(mEstudiante); 
    this.reportarPersona({ mPersona: mEstudiante });
  }
  
  procesarComerciante(data: iComerciante) {
 
    let mComerciante = new Cl_mComerciante(data); 
    this.modelo.procesarCasaPrestamo(mComerciante); 
    this.reportarPersona({ mPersona: mComerciante });
  }
  
  reportarPersona({ mPersona }: { mPersona: Cl_mPersona }) {

    this.vista.reportarPersona({ 
      dataPersona: mPersona.toJSON() as any, 
      solicitudes: this.modelo.solicitudes(),
      rechazados: this.modelo.rechazados(),
      aprobados100: this.modelo.aprobados100(),
      porcentajeCreditoAprobado: this.modelo.porcentajeCreditoAprobado(),
      porcentajeCreditoRechazado: this.modelo.porcentajeCreditoRechazado(),
    });
  }
}