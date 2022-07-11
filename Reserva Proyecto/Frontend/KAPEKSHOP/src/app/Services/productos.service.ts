import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { JwtHelperService } from '@auth0/angular-jwt';
import getHeaders from 'src/app/helpers/getHeaders'

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})

export class ProductosService {


  constructor(private http:HttpClient) { }
  /*------------------------------Metodos POST------------------------------*/
  /*Crear Producto*/
  crear(objProducto:any): Observable<any> {
    let urlStr = `http://localhost:3000/producto/registro/`
      return this.http.post(urlStr, objProducto)
  }
  /*------------------------------Metodos GET-------------------------------*/
  getProductos(): Observable<any>{
    let url = 'http://localhost:3000/producto/';
    return this.http.get(url);
  }

  obtenerProductoActual(id:any) {
    const token = localStorage.getItem('token') || '';
    const headers = getHeaders(token)
    return this.http.get(`http://localhost:3000/producto/${id}`, headers);
  }

  getProducto(id: any): Observable<any>{
    let url = `http://localhost:3000/producto/${id}`;
    return this.http.get(url);
  }
  filtrarProductos(filtro: string, valor1: string, objProductos: any): Observable<any>{
    let url = `http://localhost:3000/producto/${filtro}/${valor1}`;
    return this.http.get(url, objProductos);
  }

  /*-----------------------------Metodos UPDATE-----------------------------*/
  editarProducto(id: any, objProducto: any): Observable<any>{
    let url = `http://localhost:3000/producto/actualizar/${id}`;
    return this.http.put(url, objProducto);
  }
  /*-----------------------------Metodos DELETE-----------------------------*/
  eliminarProducto(id: number): Observable<any>{
    return this.http.delete(`http://localhost:3000/producto/${id}`);
  }
}
function producto_id(arg0: string, producto_id: any): Observable<any> {
  throw new Error('Function not implemented.');
}

