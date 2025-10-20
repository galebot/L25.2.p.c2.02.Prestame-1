export default class Cl_mCasaPrestamo {
    constructor() {
        this.cntAprobados100 = 0;
        this.cntRechazados = 0;
        this.cntSolicitudes = 0;
    }
    procesarCasaPrestamo(persona) {
        this.cntSolicitudes++;
        let porcentaje = persona.porcentajeCreditoAprobado();
        if (porcentaje === 100) {
            this.cntAprobados100++;
        }
        else if (porcentaje === 0) {
            this.cntRechazados++;
        }
    }
    solicitudes() { return this.cntSolicitudes; }
    aprobados100() { return this.cntAprobados100; }
    rechazados() { return this.cntRechazados; }
    porcentajeCreditoAprobado() {
        if (this.cntSolicitudes > 0) {
            return (this.cntAprobados100 / this.cntSolicitudes) * 100;
        }
        else {
            return 0;
        }
    }
    porcentajeCreditoRechazado() {
        if (this.cntSolicitudes > 0) {
            return (this.cntRechazados / this.cntSolicitudes) * 100;
        }
        else {
            return 0;
        }
    }
}
