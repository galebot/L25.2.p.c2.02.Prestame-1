import Cl_mPersona from "./Cl_mPersona.js";
import { iEstudiante } from "./_data.js"; 

export default class Cl_mEstudiante extends Cl_mPersona { 
private _nota : number = 0; 
  constructor(data: iEstudiante) {
    super({cedula: data.cedula, nombre: data.nombre, edad: data.edad, sexo: data.sexo, edoCivil: data.edoCivil}); 
    this._nota = data.nota; 
  }
set nota(nota: number) {
    this._nota = +nota;
  }
  get nota(): number {
    return this._nota;
  }

  porcentajeCreditoAprobado(): number {
    if (this.edad < 20 && this.nota > 17 ) { 
      return 100; 
    } else if (this.edad >= 20 && this.edoCivil === 2 && this.nota > 15) { 
      return 100; 
    } else {
      return 0;
    }
  }

  
  toJSON() {
    return {
      ...super.toJSON(),
      persona: "Estudiante",
      nota: this.nota, 
    };
  }
}