import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import getHeaders from '../helpers/getHeaders';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }
  crearProducto(objUsuario:any): Observable<any> {
    let urlStr = `http://localhost:3000/producto/registro/`
      return this.http.post(urlStr, objUsuario)
  }
  /*crearDenuncia(idP:any, idUsuario: any, opcion:any, razon:any, otro:any){
    let url = `http://localhost:3000/producto/denuncia/${idP}`
    return this.http.post(url, idUsuario, opcion, razon, otro)
  }*/
  
  getProductos(): Observable<any>{
    let url = 'http://localhost:3000/producto/';
    return this.http.get(url);
  }

  actualizarContador(id:any): Observable<any>{
    let url = `http://localhost:3000/producto/contador/${id}`;
    return this.http.put(url, {contador:1});
  }

  obtenerProductoActual(id:any) {
    const token = localStorage.getItem('token') || '';
    const headers = getHeaders(token)
    return this.http.get(`http://localhost:3000/producto/${id}`, headers);
  }

  obtenerPorId(idProducto:number):Observable<any>{
    let url = `http://localhost:3000/producto/detalle/${idProducto}`;
    return this.http.get(url)
  }

  getProductoPorCategoria(id: any): Observable<any>{
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
