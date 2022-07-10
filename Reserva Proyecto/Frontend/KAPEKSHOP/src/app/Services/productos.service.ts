import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  crear(objUsuario: any): Observable<any> {
    let urlStr = `http://localhost:3000/producto/registro/`
    return this.http.post(urlStr, objUsuario)
  }
  getProductos(): Observable<any> {
    let url = 'http://localhost:3000/producto/';
    return this.http.get(url);
  }

  actualizarProducto(objUsuario: any): Observable<any> {
    let urlStr = 'http://localhost:3000/producto/producto/${idProducto}'
    return this.http.put(urlStr, objUsuario)
  }

  eliminarPorId(objUsuario: any): Observable<any> {
    let urlStr = 'http://localhost:3000/producto/${idProducto}'
    return this.http.delete(urlStr, objUsuario)

  }
}