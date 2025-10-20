import Cl_mEstudiante from "./Cl_mEstudiante.js";
import Cl_mComerciante from "./Cl_mComerciante.js";
import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mCasaPrestamo {
  private cntAprobados100: number = 0;
  private cntRechazados: number = 0;
  private cntSolicitudes: number = 0;

  procesarCasaPrestamo(persona: Cl_mPersona) { 
    this.cntSolicitudes ++;
    let porcentaje = persona.porcentajeCreditoAprobado();

    if (porcentaje === 100) {
      this.cntAprobados100 ++;
    } else if (porcentaje === 0) {
      this.cntRechazados ++;
    }
  }
  
  solicitudes(): number { return this.cntSolicitudes; }
  aprobados100(): number { return this.cntAprobados100; }
  rechazados(): number { return this.cntRechazados; }
  
  porcentajeCreditoAprobado(): number {
    if (this.cntSolicitudes > 0) {
      return (this.cntAprobados100 / this.cntSolicitudes) * 100;
    } else {
      return 0;
      
    } 

  }
  porcentajeCreditoRechazado(): number {
    if (this.cntSolicitudes > 0) {
      return (this.cntRechazados / this.cntSolicitudes) * 100;
    } else {
      return 0;
      
    } 

  }
}