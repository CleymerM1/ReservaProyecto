import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ListaDeseosService } from 'src/app/Services/lista-de-deseos.services';
import { ProductosService } from 'src/app/Services/productos.service';

@Component({
  selector: 'app-lista-de-deseos',
  templateUrl: './lista-de-deseos.component.html',
  styleUrls: ['./lista-de-deseos.component.css']
})


export class ListaDeDeseosComponent implements OnInit {


  ListaProductos: Producto[] = [];
  ListaDeseos: number[] = [];

  constructor(private ProductosService: ProductosService, private ListaDeseosService: ListaDeseosService) { }

  ngOnInit(): void {
    this.cargarProductos();

  }

  cargarProductos() {
    this.ProductosService.getProductos().subscribe((producto) => {
      this.ListaProductos = producto;
    })
  }

  cargarListaDeseos() {
 
  }

}
