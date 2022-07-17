import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/Categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http:HttpClient, private router:Router) { }
  crearCategoria(objCategoria:any): Observable<any> {
    let urlStr = `http://localhost:3000/categoria/registro/`
      return this.http.post(urlStr, objCategoria)
  }

  getCategorias():Observable<any>{
    let urlC = 'http://localhost:3000/categoria';
    return this.http.get(urlC)

  }

  getCategoria(idCategoria:number):Observable<any>{
    let urlC = `http://localhost:3000/categoria/${idCategoria}`;
    return this.http.get(urlC)

  }

  eliminarCategoria(idCategoria:number): Observable<any>{
    let UrlEl= `http://localhost:3000/categoria/eliminar/${idCategoria}`;
    return this.http.delete(UrlEl)
  }

  editarCategoria(objCategoria:any, idCategoria:any): Observable<any>{
    let UrlEl= `http://localhost:3000/categoria/editar/${idCategoria}`;
    return this.http.put(UrlEl,objCategoria)
  }
}
