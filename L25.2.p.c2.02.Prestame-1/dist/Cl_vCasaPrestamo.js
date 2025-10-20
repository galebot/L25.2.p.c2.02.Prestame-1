import Cl_vEstudiante from "./Cl_vEstudiante.js";
import Cl_vComerciante from "./Cl_vComerciante.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vCasaPrestamo extends Cl_vGeneral {
    constructor() {
        super({ formName: "mainForm" });
        this._vEstudiante = new Cl_vEstudiante();
        this._vComerciante = new Cl_vComerciante();
        this.dataPersona = this.crearHTMLElement({ elementName: "dataPersona" });
        this.lblSolicitudes = this.crearHTMLElement({ elementName: "lblSolicitudes" });
        this.lblRechazados = this.crearHTMLElement({ elementName: "lblRechazados" });
        this.lblAprobados100 = this.crearHTMLElement({ elementName: "lblAprobados100" });
        this.lblPorcentajeCreditoAprobado = this.crearHTMLElement({ elementName: "lblPorcentajeCreditoAprobado" });
        this.lblPorcentajeCreditoRechazado = this.crearHTMLElement({ elementName: "lblPorcentajeCreditoRechazado" });
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
    set controlador(controlador) {
        super.controlador = controlador;
        this._vEstudiante.controlador = controlador;
        this._vComerciante.controlador = controlador;
    }
    reportarPersona({ dataPersona, solicitudes, rechazados, aprobados100, porcentajeCreditoAprobado, porcentajeCreditoRechazado, }) {
        this.dataPersona.innerHTML += `
      <tr>
        <td class="colNumber">${dataPersona.cedula}</td>
                <td class="colNumber">${dataPersona.nombre}</td>
        <td class="colCurrency">${dataPersona.edad}</td>
        <td class="colCurrency">${dataPersona.sexo}</td>
        <td class="colNumber">${dataPersona.edoCivil}</td>
<td class="colNumber">${dataPersona.nota !== undefined ? dataPersona.nota : ''}</td>
        <td class="colString">${dataPersona.porcentajeCreditoAprobado}</td>
    </tr>
    `;
        this.lblSolicitudes.innerHTML = solicitudes.toString();
        this.lblRechazados.innerHTML = rechazados.toString();
        this.lblAprobados100.innerHTML = aprobados100.toString();
        this.lblPorcentajeCreditoAprobado.innerHTML = porcentajeCreditoAprobado.toFixed(2) + "%";
        this.lblPorcentajeCreditoRechazado.innerHTML = porcentajeCreditoRechazado.toFixed(2) + "%";
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver });
        if (ver) {
            this._vEstudiante.show({ ver: false });
            this._vComerciante.show({ ver: false });
        }
    }
}
