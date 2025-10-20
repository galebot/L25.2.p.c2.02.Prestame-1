import Cl_vPersona from "./Cl_vPersona.js";
export default class Cl_vComerciante extends Cl_vPersona {
    constructor() {
        super();
        this.divInCedula = this.crearHTMLElement({ elementName: "divInCedula" });
        this.divInNombre = this.crearHTMLElement({ elementName: "divInNombre" });
        this.divInEdad = this.crearHTMLElement({ elementName: "divInEdad" });
        this.divInSexo = this.crearHTMLElement({ elementName: "divInSexo" });
        this.divInEdoCivil = this.crearHTMLElement({ elementName: "divInEdoCivil" });
        this.btAceptarComerciante = this.crearHTMLButtonElement({
            elementName: "btAceptarComerciante",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarComerciante({
                    cedula: this.cedula,
                    nombre: this.nombre,
                    edad: this.edad,
                    sexo: this.sexo,
                    edoCivil: this.edoCivil,
                });
            },
        });
        this.btAceptarEstudiante = this.crearHTMLButtonElement({ elementName: "btAceptarEstudiante" });
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombrePersona: "Estudiante" });
        this.divInCedula.hidden = !ver;
        this.divInEdad.hidden = !ver;
        this.divInNombre.hidden = !ver;
        this.divInSexo.hidden = !ver;
        this.divInEdoCivil.hidden = !ver;
        this.divInNombre.hidden = !ver;
        this.btAceptarComerciante.hidden = !ver;
        this.btAceptarEstudiante.hidden = true;
    }
}
