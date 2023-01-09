export class Persona {
    id: number;
    nombre: string;
    apellido: string;
    ubicacion: string;
    titulo: string;
    subtitulo: string;
    descripcion: string;
    img: string;

    constructor(nombre: string, apellido: string, ubicacion: string, titulo: string, subtitulo: string, descripcion: string, img: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.ubicacion = ubicacion;
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.descripcion = descripcion;
        this.img = img;
    }
}