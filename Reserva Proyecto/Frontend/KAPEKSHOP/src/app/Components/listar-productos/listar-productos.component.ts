import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';


@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent {

  productoArray: Producto[] = [
    {nombre : "Laptop", categoria: "Electronica", estado: "Nuevo", descripcion: "HP de 32 GB Ram, 286 SSD",ubicacion: "Comayagua", costo: "16000"},
    {nombre : "Telefono", categoria: "Electronica", estado: "Nuevo", descripcion: "HP de 32 GB Ram, 286 SSD", ubicacion: "Comayagua", costo: "16000"},
    {nombre : "Televisor", categoria: "Electronica", estado: "Nuevo", descripcion: "HP de 32 GB Ram, 286 SSD", ubicacion: "Comayagua", costo: "16000"}
  
  
  ];
   

}
