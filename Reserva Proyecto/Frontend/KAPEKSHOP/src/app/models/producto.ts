export class Producto{
    _id?: number;
    nombre: string;
    categoria:string;
    estado: string;
    descripcion: string;
    descuento: number;
    ubicacion:string;
    precio:string;


    constructor(nombre: string, categoria:string, estado:string, descripcion: string, descuento: number, ubicacion:string, precio:string){
        this.nombre=nombre;
        this.categoria=categoria;
        this.estado= estado;
        this.descripcion = descripcion;
        this.descuento= descuento;
        this.ubicacion=ubicacion;
        this.precio=precio
    }
}