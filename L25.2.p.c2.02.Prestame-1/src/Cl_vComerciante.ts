import Cl_vPersona from "./Cl_vPersona.js";
import { iComerciante } from "./_data.js";

export default class Cl_vComerciante extends Cl_vPersona {
  private divInNombre: HTMLElement;
  private divInCedula: HTMLElement;
  private divInEdad: HTMLElement;
  private divInSexo: HTMLElement;
  private divInEdoCivil: HTMLElement;
  private btAceptarComerciante: HTMLButtonElement;
  private btAceptarEstudiante: HTMLButtonElement;

  constructor() {
    super();
    this.divInCedula = this.crearHTMLElement({ elementName: "divInCedula" });
    this.divInNombre = this.crearHTMLElement({ elementName: "divInNombre" });
    this.divInEdad = this.crearHTMLElement({ elementName: "divInEdad" });
    this.divInSexo = this.crearHTMLElement({ elementName: "divInSexo" });
    this.divInEdoCivil = this.crearHTMLElement({ elementName: "divInEdoCivil" });

    this.btAceptarComerciante = this.crearHTMLButtonElement({
      elementName: "btAceptarComerciante",
      onclick: () => this.controlador?.procesarComerciante({
        cedula: this.cedula,
        nombre: this.nombre,
        edad: this.edad,
        sexo: this.sexo,
        edoCivil: this.edoCivil,

      }),
    });
    this.btAceptarEstudiante = this.crearHTMLButtonElement({ elementName: "btAceptarEstudiante" });
  }
    
   

  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombrePersona: "Estudiante" });
    
    this.divInCedula.hidden = !ver;
    this.divInEdad.hidden = !ver;
    this.divInNombre.hidden = !ver;
    this.divInSexo.hidden = !ver;
    this.divInEdoCivil.hidden = !ver;
    this.divInNombre.hidden = !ver
   

    

    this.btAceptarComerciante.hidden = !ver;
    this.btAceptarEstudiante.hidden = true;
  }
}
export { iComerciante };