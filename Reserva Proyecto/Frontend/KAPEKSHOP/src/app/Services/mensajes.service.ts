import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MensajeService{
    constructor(private http:HttpClient) { }

    crearMensaje(objMensaje:any): Observable<any> {
        let urlStr = `http://localhost:3000/mensaje/crearMensaje/`
          return this.http.post(urlStr, objMensaje)
    }

    obtenerMensajes(emisor_id:number, receptor_id:any): Observable<any> {
        let urlStr = `http://localhost:3000/mensaje/obtenerMensajes/${emisor_id}/${receptor_id}`
          return this.http.get(urlStr)
    }

}