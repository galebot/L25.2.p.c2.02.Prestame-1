import Cl_mCasaPrestamo from "./Cl_mCasaPrestamo.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vCasaPrestamo from "./Cl_vCasaPrestamo.js";
import { Estudiante, Comerciante } from "./_data.js";


export default class Cl_index {
  private controlador: Cl_controlador;

  constructor() {
    let vista = new Cl_vCasaPrestamo();
    let modelo = new Cl_mCasaPrestamo();
    this.controlador = new Cl_controlador(modelo, vista);
    vista.controlador = this.controlador;
    vista.show();
    this.iniciarData();
  }

  iniciarData() {

    Estudiante.forEach(data => {
      this.controlador.procesarEstudiante(data);
    });

    Comerciante.forEach(data => {
      this.controlador.procesarComerciante(data);
    });
  }
}