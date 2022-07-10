import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/Services/productos.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  listarProductos: Producto[]=[]
  constructor(private productoService: ProductosService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerProductos();
    this.actualizarProducto()
  }
  
  obtenerProductos(){
    this.productoService.getProductos().subscribe(data =>{
      console.log(data);
      this.listarProductos = data;
    })
  }

  actualizarProducto():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
      if(id){
        this.productoService.getProductos().subscribe(
          es=>this.listarProductos=es
        );
      }      }
    );
    }
  }

  























/*[x: string]: any;

productoArray: Producto[] = [
  {nombre : "Laptop", categoria: "Electronica", estado: "Nuevo", descripcion: "HP de 32 GB Ram, 286 SSD",ubicacion: "Comayagua", costo: "16000"},
  {nombre : "Telefono", categoria: "Electronica", estado: "Nuevo", descripcion: "HP de 32 GB Ram, 286 SSD", ubicacion: "Comayagua", costo: "16000"},
  {nombre : "Televisor", categoria: "Electronica", estado: "Nuevo", descripcion: "HP de 32 GB Ram, 286 SSD", ubicacion: "Comayagua", costo: "16000"}
];

}
 

@Injectable({
  providedIn: 'root'
})
 

export class ProductosService {
  delete(Producto: string) {
    throw new Error('Method not implemented.');
  }

constructor(private http:HttpClient) { }
crearProducto(objUsuario:any): Observable<any> {
  let urlStr = `http://localhost:3000/producto/registro/`
    return this.http.post(urlStr, objUsuario)
}
getProductos(): Observable<any>{
  let url = 'http://localhost:3000/producto/';
  return this.http.get(url);
}

actualizarPorId(producto:Producto):Observable<any>{
  return this.http.put(this.actualizarPorId+'/producto'+producto._id,producto);
}

eliminarProducto(producto:Producto):Observable<any>{
  return this.http.delete(this.eliminarProducto+'/producto'+producto._id);
}
} */