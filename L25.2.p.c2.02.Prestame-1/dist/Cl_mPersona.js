export default class Cl_mPersona {
    constructor({ cedula = 0, nombre = "", edad = 0, sexo = "", edoCivil = 0 }) {
        this._cedula = 0;
        this._nombre = "";
        this._edad = 0;
        this._sexo = "";
        this._edoCivil = 0;
        this._cedula = +cedula;
        this._nombre = nombre;
        this._edad = +edad;
        this._sexo = sexo;
        this._edoCivil = +edoCivil; // 🚨 CORRECCIÓN: Asegurar que edoCivil sea number aquí también.
    }
    set cedula(cedula) { this._cedula = +cedula; }
    get cedula() { return this._cedula; }
    set nombre(nombre) { this._nombre = nombre; }
    get nombre() { return this._nombre; }
    set edad(edad) { this._edad = +edad; }
    get edad() { return this._edad; }
    set sexo(sexo) { this._sexo = sexo; }
    get sexo() { return this._sexo; }
    set edoCivil(edoCivil) { this._edoCivil = +edoCivil; } // 🚨 CORRECCIÓN: Convertir a number.
    get edoCivil() { return this._edoCivil; }
    porcentajeCreditoAprobado() {
        return 0;
    }
    toJSON() {
        return {
            cedula: this.cedula,
            nombre: this.nombre,
            edad: this.edad,
            sexo: this.sexo,
            edoCivil: this.edoCivil,
            porcentajeCreditoAprobado: this.porcentajeCreditoAprobado(),
        };
    }
}
