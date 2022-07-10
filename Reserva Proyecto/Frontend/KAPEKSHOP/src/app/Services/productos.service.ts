import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

<<<<<<< HEAD
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
=======
  constructor(private http:HttpClient) { }
  /*------------------------------Metodos POST------------------------------*/
  /*Crear Producto*/
  crearProducto(objProducto:any): Observable<any> {
    let urlStr = `http://localhost:3000/producto/registro/`
      return this.http.post(urlStr, objProducto)
  }
  /*------------------------------Metodos GET-------------------------------*/
  getProductos(): Observable<any>{
    let url = 'http://localhost:3000/producto/';
    return this.http.get(url);
  }
  filtrarProductos(filtro: string, valor1: string, valor2: string, objProductos: any): Observable<any>{
    let url = `http://localhost:3000/producto/${filtro}/${valor1}/${valor2}`;
    return this.http.get(url, objProductos);
  }
  getProducto(id: string): Observable<any>{
    let url = `http://localhost:3000/producto/${id}`
    return this.http.get(url);
  }
  /*-----------------------------Metodos UPDATE-----------------------------*/
  editarProducto(id: string, objProducto: any): Observable<any>{
    let url = `http://localhost:3000/producto/${id}`;
    return this.http.put(url, objProducto);
  }
  /*-----------------------------Metodos DELETE-----------------------------*/
  eliminarProducto(id: string): Observable<any>{
    return this.http.delete(`http://localhost:3000/producto/${id}`);
  }
}
function producto_id(arg0: string, producto_id: any): Observable<any> {
  throw new Error('Function not implemented.');
}
>>>>>>> 3b71588679e375b870cb0258c35ddab844f94bc5

  }
}