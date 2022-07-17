import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/Services/productos.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  listarProductos: Producto[]=[]
  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.obtenerProductos()
  }
  

  obtenerProductos(){
    this.productoService.getProductos().subscribe(data =>{
      console.log(data);
      this.listarProductos = data;
    })
  }
  /*
  productoArray: Producto[] = [
    {nombre : "Laptop", categoria: "Electronica", estado: "Nuevo", descripcion: "HP de 32 GB Ram, 286 SSD",ubicacion: "Comayagua", costo: "16000"},
    {nombre : "Telefono", categoria: "Electronica", estado: "Nuevo", descripcion: "HP de 32 GB Ram, 286 SSD", ubicacion: "Comayagua", costo: "16000"},
    {nombre : "Televisor", categoria: "Electronica", estado: "Nuevo", descripcion: "HP de 32 GB Ram, 286 SSD", ubicacion: "Comayagua", costo: "16000"}
  
  
  ];*/

}
