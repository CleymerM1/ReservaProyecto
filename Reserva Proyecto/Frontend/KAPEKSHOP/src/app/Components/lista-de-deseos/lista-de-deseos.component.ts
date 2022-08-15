import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import formatearDinero from 'src/app/helpers/formatoMoneda';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/Services/productos.service';

@Component({
  selector: 'app-lista-de-deseos',
  templateUrl: './lista-de-deseos.component.html',
  styleUrls: ['./lista-de-deseos.component.css']
})


export class ListaDeDeseosComponent implements OnInit {

  @Input() imagenes: any
  @Input() listarProducto: any
  @Output() onEvento = new EventEmitter<boolean>();
  ListaDeseos: number[] = [];
  estrellas: any = []
  usuarioActual: any = []
  productoActual: any
  idProducto: number
  idUsuario: number
  producto: any = []
  usuario: any = []
  listarProductos: Producto[] = []
  calificacion = 0;
  imagenB64: any


  constructor(private ProductosService: ProductosService, private route: ActivatedRoute) {
    this.idUsuario = this.route.snapshot.params["id"];
    this.idProducto = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.cargarListaDeseos();

  }

  cargarListaDeseos() {
    this.ProductosService.obtenerFavoritos(this.idUsuario).subscribe({
      error: (error) => {
        console.log(error)
      },
      next: (data) => {
        this.producto = data.datos
      }
    })
  }

  formatoDinero(cantidad: any) {
    return formatearDinero(cantidad)
  }

  generarEstrellas(rango: number) {
    let estrellas = []
    for (let i = 0; i < 5; i++) {
      if (i + 1 <= rango) {
        estrellas.push('text-warning fa fa-star')
      } else {
        estrellas.push('text-muted fa fa-star')
      }
    }
    return estrellas
  }

  obtenerCalificacionProducto() {
    this.ProductosService.obtenerCalificacionProducto(this.listarProducto.idProducto).subscribe((res: any) => {
      this.estrellas = this.generarEstrellas(res)
      console.log(this.estrellas)
    }, err => {
      console.log(err)
    })
  }

  eliminarFavorito(event: any) {
    const idProducto = event
    if (confirm("¿Seguro que desea eliminar?")) {
      this.ProductosService.eliminarFavorito(this.idUsuario, idProducto).subscribe({
        error: (error) => {
          console.log(error)
        },
        next: (data) => {
          this.cargarListaDeseos()
        }
      })
    }
  }
}



