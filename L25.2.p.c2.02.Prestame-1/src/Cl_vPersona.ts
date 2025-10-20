import Cl_vGeneral from "./Cl_vGeneral.js";

export default class Cl_vPersona extends Cl_vGeneral {
  protected inCedula: HTMLInputElement;
  protected inNombre: HTMLInputElement;
  protected inEdad: HTMLInputElement;
  protected inSexo: HTMLInputElement;
  protected inEdoCivil: HTMLInputElement;
  protected inNota: HTMLInputElement;
  protected lblPersona: HTMLElement;
  protected btCancelar: HTMLButtonElement;

  constructor() {
    super({ formName: "personaForm" });
    
    this.lblPersona = this.crearHTMLElement({ elementName: "lblPersona" }); 
    this.inCedula = this.crearHTMLInputElement({ elementName: "inCedula" });
    this.inNombre = this.crearHTMLInputElement({ elementName: "inNombre" });
    this.inEdad = this.crearHTMLInputElement({ elementName: "inEdad" });
    this.inSexo = this.crearHTMLInputElement({ elementName: "inSexo" });
    this.inEdoCivil = this.crearHTMLInputElement({ elementName: "inEdoCivil" });
    this.inNota = this.crearHTMLInputElement({ elementName: "inNota" });
    
    this.btCancelar = this.crearHTMLButtonElement({
      elementName: "btCancelar",
      onclick: () => {
        this.show({ ver: false });
        this.controlador?.vista.show(); 
      },
    });
  }

  get cedula(): number { return +this.inCedula.value; }
  get nombre(): string { return this.inNombre.value; }
  get edad(): number { return +this.inEdad.value; }
  get sexo(): string { return this.inSexo.value; }
  get edoCivil(): number { return +this.inEdoCivil.value; }
  get nota(): number { return +this.inNota.value; }

  show({ ver = true, nombrePersona = "" }: { ver?: boolean; nombrePersona?: string } = { ver: true }): void {
    super.show({ ver });
    this.lblPersona.innerHTML = nombrePersona;
    this.inCedula.value = "";
    this.inNombre.value = "";
    this.inEdad.value = "";
    this.inSexo.value = "";
    this.inEdoCivil.value = "";
    this.inNota.value = "";
    this.inCedula.focus();
  }
}