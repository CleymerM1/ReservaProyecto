import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }
  crearProducto(objUsuario:any): Observable<any> {
    let urlStr = `http://localhost:3000/producto/registro/`
      return this.http.post(urlStr, objUsuario)
  }
  getProductos(): Observable<any>{
    let url = 'http://localhost:3000/producto/';
    return this.http.get(url);
  }
}
