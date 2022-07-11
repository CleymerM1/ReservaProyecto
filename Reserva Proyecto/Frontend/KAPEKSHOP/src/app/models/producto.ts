export class Producto{
    idProducto: number;
    nombre: string;
    categoria:string;
    estado:string;
    descripcion:string;
    costo:string;
    ubicacion:string;


    constructor(idProducto: number,nombre: string, categoria:string,estado:string,
        descripcion:string, costo:string, ubicacion:string){
        this.idProducto=idProducto;
        this.nombre=nombre;
        this.categoria=categoria;
        this.estado=estado;
        this.descripcion=descripcion;
        this.costo=costo;
        this.ubicacion=ubicacion;
        
    }
}
