export class Educacion { 
    id:number;
    nombreEd: string;
    descripcionEd: string;
    areaEd:string;

    constructor(nombreEd: string, descripcionEd:string, areaEd: string){
        this.nombreEd=nombreEd;
        this.descripcionEd = descripcionEd;
        this.areaEd=areaEd;
    }
}
