import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vPersona extends Cl_vGeneral {
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
                var _a;
                this.show({ ver: false });
                (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.vista.show();
            },
        });
    }
    get cedula() { return +this.inCedula.value; }
    get nombre() { return this.inNombre.value; }
    get edad() { return +this.inEdad.value; }
    get sexo() { return this.inSexo.value; }
    get edoCivil() { return +this.inEdoCivil.value; }
    get nota() { return +this.inNota.value; }
    show({ ver = true, nombrePersona = "" } = { ver: true }) {
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
