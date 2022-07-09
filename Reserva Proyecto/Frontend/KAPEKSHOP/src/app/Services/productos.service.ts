import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

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
  editarProducto(): Observable<any>{
    let url = 'http://localhost:3000/producto/{{producto.producto_id}}';
    return this.http.put(this.editarProducto+'/producto',producto_id);
  }

  eliminarProducto(): Observable<any>{
    return this.http.delete('http://localhost:3000/producto/');
  }
}
function producto_id(arg0: string, producto_id: any): Observable<any> {
  throw new Error('Function not implemented.');
}

