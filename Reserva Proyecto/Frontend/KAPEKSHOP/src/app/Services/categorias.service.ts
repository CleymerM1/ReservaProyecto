import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
    let urlC = 'http://localhost:3000/categorias/';
    return this.http.get(urlC)

  }
}
