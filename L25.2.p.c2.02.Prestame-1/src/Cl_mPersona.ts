export default class Cl_mPersona {
  protected _cedula: number = 0;
  protected _nombre: string = "";
  protected _edad: number = 0; 
  protected _sexo: string = ""; 
  protected _edoCivil: number = 0; 


  constructor({ cedula= 0, nombre= "", edad = 0, sexo = "", edoCivil = 0}: { cedula: number, nombre: string, edad: number , sexo?: string, edoCivil?: number }) {
    this._cedula = +cedula;
    this._nombre = nombre;
    this._edad =  +edad;
        this._sexo = sexo;
        this._edoCivil = +edoCivil; // 🚨 CORRECCIÓN: Asegurar que edoCivil sea number aquí también.
  }

  set cedula(cedula: number) { this._cedula = +cedula; }
  get cedula(): number { return this._cedula; }


  set nombre(nombre: string) { this._nombre = nombre; }
  get nombre(): string { return this._nombre; }

  set edad(edad: number) { this._edad = +edad; }
  get edad(): number { return this._edad; }
 
  set sexo(sexo: string) { this._sexo = sexo; }
  get sexo(): string { return this._sexo; }

  set edoCivil(edoCivil: number) { this._edoCivil = +edoCivil; } // 🚨 CORRECCIÓN: Convertir a number.
  get edoCivil(): number { return this._edoCivil; }

  porcentajeCreditoAprobado(): number {
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