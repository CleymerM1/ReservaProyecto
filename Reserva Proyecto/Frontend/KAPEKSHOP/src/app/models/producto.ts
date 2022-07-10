export class Producto{
    _id?: number;
    nombre: string;
    categoria:string;
    estado:string;
    descripcion:string;
    costo:string;
    ubicacion:string;


    constructor(nombre: string, categoria:string,estado:string,
        descripcion:string, costo:string, ubicacion:string){
        this.nombre=nombre;
        this.categoria=categoria;
        this.estado=estado;
        this.descripcion=descripcion;
        this.costo=costo;
        this.ubicacion=ubicacion;
        
    }
}
