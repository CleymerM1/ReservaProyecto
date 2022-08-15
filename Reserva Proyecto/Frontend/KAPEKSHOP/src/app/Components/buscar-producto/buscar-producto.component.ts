import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ProductosService } from 'src/app/Services/productos.service';
import formatearDinero from 'src/app/helpers/formatoMoneda';


@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {


  busqueda: string = '';
  productosFiltrados: any = [];

  constructor(private authService: AuthService, private router: Router,  private productoService: ProductosService) { }

  ngOnInit(): void {
  }


  modalBuscar() {
    let busq = this.busqueda.toLowerCase()
    this.productoService.getProductos().subscribe(data => {
      const data1 = data.filter((el: any) =>
        JSON.parse(el.nombre.toLowerCase().indexOf(busq)) > -1)
      console.log(data1)
      this.productosFiltrados= data1
      
      const data2 = data.filter((el: any) =>
      JSON.parse(el.ubicacion.toLowerCase().indexOf(busq)) > -1)
      console.log(data2)
      this.productosFiltrados = data2
    })
  }

  formatoDinero(cantidad: any) {
    return formatearDinero(cantidad)
  }



}
