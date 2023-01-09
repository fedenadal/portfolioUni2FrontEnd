export class Experiencia {
    id?:number;
    nombreE:string;
    descripcionE: string;
    areaE:string;

    constructor(nombreE:string, descripcionE:string, areaE:string){
        this.nombreE= nombreE;
        this.descripcionE = descripcionE;
        this.areaE= areaE;
    }
}
