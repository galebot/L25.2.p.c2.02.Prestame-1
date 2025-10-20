import Cl_vPersona from "./Cl_vPersona.js";
import { iEstudiante } from "./_data.js";

export default class Cl_vEstudiante extends Cl_vPersona {
  private divInNombre: HTMLElement;
  private divInCedula: HTMLElement;
  private divInEdad: HTMLElement;
  private divInSexo: HTMLElement;
  private divInEdoCivil: HTMLElement;
  private divInNota: HTMLElement;
  private btAceptarEstudiante: HTMLButtonElement;
  private btAceptarComerciante: HTMLButtonElement;

  constructor() {
    super();
    this.divInCedula = this.crearHTMLElement({ elementName: "divInCedula" });
    this.divInNombre = this.crearHTMLElement({ elementName: "divInNombre" });
    this.divInEdad = this.crearHTMLElement({ elementName: "divInEdad" });
    this.divInSexo = this.crearHTMLElement({ elementName: "divInSexo" });
    this.divInEdoCivil = this.crearHTMLElement({ elementName: "divInEdoCivil" });
    this.divInNota = this.crearHTMLElement({ elementName: "divInNota" });
    this.btAceptarEstudiante = this.crearHTMLButtonElement({
      elementName: "btAceptarEstudiante",
      onclick: () => this.controlador?.procesarEstudiante({
        cedula: this.cedula,
        nombre: this.nombre,
        edad: this.edad,
        sexo: this.sexo,
        edoCivil: this.edoCivil,
        nota: this.nota
      }),
    });
    this.btAceptarComerciante = this.crearHTMLButtonElement({ elementName: "btAceptarComerciante" });
  }
    
   

  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombrePersona: "Estudiante" });
    
    this.divInCedula.hidden = !ver;
    this.divInEdad.hidden = !ver;
    this.divInSexo.hidden = !ver;
    this.divInEdoCivil.hidden = !ver;
    this.divInNombre.hidden = !ver;
    this.divInNota.hidden =  !ver;

    

    this.btAceptarEstudiante.hidden = !ver;
    this.btAceptarComerciante.hidden = true;
  }
}
export { iEstudiante };