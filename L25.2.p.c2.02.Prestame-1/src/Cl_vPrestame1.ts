import Cl_vEstudiante from "./Cl_vEstudiante.js";
import Cl_vComerciante from "./Cl_vComerciante.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
import Cl_controlador from "./Cl_controlador.js";

interface iPersona {
  cedula: number; 
  nombre: string;
  edad: number; 
  sexo: string; // Corregido a string
  edoCivil: number;
  nota?: number; // Agregada nota
  porcentajeCreditoAprobado: number;

}

export default class Cl_vPrestame1 extends Cl_vGeneral {
  private _vEstudiante: Cl_vEstudiante;
  private _vComerciante: Cl_vComerciante;
  private dataPersona: HTMLElement;
  private lblPorcentajeCreditoAprobado: HTMLElement;
      private lblPorcentajeCreditoRechazado: HTMLElement;
       private lblRechazados: HTMLElement;
        private lblAprobados100: HTMLElement;
         private lblSolicitudes: HTMLElement;
  private btAgregarEstudiante: HTMLElement;
  private btAgregarComerciante: HTMLElement;

  constructor() {
    super({ formName: "mainForm" });
    this._vEstudiante = new Cl_vEstudiante();
    this._vComerciante = new Cl_vComerciante();
    this.dataPersona = this.crearHTMLElement({ elementName: "dataPersona" });
    this.lblPorcentajeCreditoAprobado = this.crearHTMLElement({ elementName: "lblPorcentajeCreditoAprobado" });
      this.lblPorcentajeCreditoRechazado = this.crearHTMLElement({ elementName: "lblPorcentajeCreditoRechazado" });
        this.lblSolicitudes = this.crearHTMLElement({ elementName: "lblSolicitudes" });
          this.lblRechazados = this.crearHTMLElement({ elementName: "lblRechazados" });
            this.lblAprobados100 = this.crearHTMLElement({ elementName: "lblAprobados100" });
  
    this.btAgregarEstudiante = this.crearHTMLButtonElement({
      elementName: "btAgregarEstudiante",
      onclick: () => {
        this.show({ ver: false });
        this._vEstudiante.show(); 
      },
    });

  
    this.btAgregarComerciante = this.crearHTMLButtonElement({
      elementName: "btAgregarComerciante",
      onclick: () => {
        this.show({ ver: false });
        this._vComerciante.show();
      },
    });

    this.dataPersona.innerHTML = "";
 
    this._vEstudiante.show({ ver: false });
    this._vComerciante.show({ ver: false });
  }

  set controlador(controlador: Cl_controlador) {
    super.controlador = controlador;
   
    this._vEstudiante.controlador = controlador;
    this._vComerciante.controlador = controlador;
  }

  get vEstudiante() {
    return this._vEstudiante;
  }
  get vComerciante() {
    return this._vComerciante;
  }

  // Corregido: Renombrado de reportarPersona a reportarCasaPrestamo
  reportarCasaPrestamo({ 
    dataPersona, // Corregido: de dataLinea a dataPersona
    porcentajeCreditoAprobado,
    porcentajeCreditoRechazado,
    solicitudes,
    rechazados,
    aprobados100,

  }: {
    dataPersona: iPersona; // Corregido: de dataLinea a dataPersona
    porcentajeCreditoAprobado: number;
    porcentajeCreditoRechazado: number;
    solicitudes: number;
    rechazados: number;
    aprobados100: number;

  }): void {
   this.dataPersona.innerHTML += `
      <tr>
        <td class="colString">${dataPersona.cedula}</td>
        <td class="colString">${dataPersona.nombre}</td>
        <td class="colNumber">${dataPersona.edad}</td>
        <td class="colString">${dataPersona.sexo}</td>
        <td class="colNumber">${dataPersona.edoCivil}</td>
        <td class="colNumber">${dataPersona.nota !== undefined ? dataPersona.nota : ''}</td>         <td class="colNumber">${dataPersona.porcentajeCreditoAprobado}%</td>
        </tr>
    `;
    this.lblPorcentajeCreditoAprobado.innerHTML = porcentajeCreditoAprobado.toFixed(2) + "%";
    this.lblPorcentajeCreditoRechazado.innerHTML = porcentajeCreditoRechazado.toFixed(2) + "%";
        this.lblSolicitudes.innerHTML = solicitudes.toString();
          this.lblAprobados100.innerHTML = aprobados100.toString();
            this.lblRechazados.innerHTML = rechazados.toString();}

  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver });
    if (ver) {

      this._vEstudiante.show({ ver: false });
      this._vComerciante.show({ ver: false });
    }
  }
}