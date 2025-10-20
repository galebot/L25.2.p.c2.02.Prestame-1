interface iEstudiante {
  cedula: number;
  nombre: string;
  edad: number;
  sexo: string;
  edoCivil: number;
  nota: number;
}
interface iComerciante {
  cedula: number;
  sexo: string;
  nombre: string;
  edad: number;
  edoCivil: number;
}

let Estudiante: iEstudiante[], Comerciante: iComerciante[];
Estudiante = [
  { cedula: 555, nombre: "Emy", edad: 15, sexo: "F", edoCivil: 2, nota: 18  },
  { cedula: 777, nombre: "Mel", edad: 19, sexo: "F", edoCivil: 4, nota: 14  },
  { cedula: 999, nombre: "Isaac", edad: 20, sexo: "M", edoCivil: 2, nota: 16  },
  { cedula: 123, nombre: "Ben", edad: 30, sexo: "M", edoCivil: 2, nota: 17  },
  { cedula: 666, nombre: "Eli", edad: 40, sexo: "F", edoCivil: 2, nota: 12  },
];
Comerciante = [
  { cedula: 222, nombre: "Eva", edad: 25, sexo: "F", edoCivil: 2 },
  { cedula: 888, nombre: "Ana", edad: 35, sexo: "F", edoCivil: 4 },
    { cedula: 111, nombre: "Ray", edad: 20, sexo: "M", edoCivil: 2},
      { cedula: 333, nombre: "Leo", edad: 30, sexo: "M", edoCivil: 1 },
        { cedula: 444, nombre: "Liz", edad: 40, sexo: "F", edoCivil: 2 },
];
export { Comerciante, Estudiante, iComerciante, iEstudiante};