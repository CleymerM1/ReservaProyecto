import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import decodificarToken from 'src/app/helpers/decodificarToken';
import formatearDinero from 'src/app/helpers/formatoMoneda';
import { ConfigModal } from 'src/app/interfaces/config-modal';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/Services/productos.service';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { ModalConfirmacionComponent } from '../modal-confirmacion/modal-confirmacion.component';

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


  mostarFormulario: boolean | undefined;

  constructor(private ProductosService: ProductosService, private usuarioService: UsuarioService, private route: ActivatedRoute,
    private modalService: NgbModal) {
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
        console.log("Lista de deseos: ", this.producto)
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

  /*eliminarFavorito() {
    console.log("Eliminar< >>>>>>>>", this.idUsuario, this.idProducto)
    if (confirm("¿Seguro que desea eliminar?")) {
      this.ProductosService.eliminarFavorito(this.idUsuario, this.idProducto).subscribe({
        error: (error) => {
          console.log(error)
        },
        next: (data) => {
          this.idUsuario = data
          this.idProducto = data
          console.log("Elementos eliminado ", this.idUsuario, this.idProducto)
        }
      })
    }*/

  modalEliminar() {
    let modalRef: NgbModalRef;
    modalRef = this.modalService.open(ModalConfirmacionComponent)
    let configuracion: ConfigModal = {
      titulo1: '¿Está seguro de eliminar de favoritos?',
      titulo2: 'Se eliminará el producto',
      parametros: { eliminarFavorito: true, idProducto: this.listarProducto.idProducto }
    }

    modalRef.componentInstance.mensaje = configuracion

    modalRef.componentInstance.onEvento.subscribe((res: any) => [
      this.onEvento.emit(true)
    ])
  }
}



