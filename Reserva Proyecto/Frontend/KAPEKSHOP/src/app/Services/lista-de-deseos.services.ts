import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaDeseosService {

    constructor(private http:HttpClient){}

    getListaDeseos(){}

    agregarAListaDeseos(idProducto: number): Observable<any> {
        let url = `http://localhost:3000/producto/lista-de-deseos/`;
        return this.http.post(url, {id: idProducto});
    }

    eliminarDeListaDeseos(idProducto: number): Observable<any>{
        return this.http.delete(`http://localhost:300/producto/lista-de-deseos/${idProducto}`);
    }



}