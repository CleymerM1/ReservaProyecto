import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Categoria } from 'src/app/interfaces/Categorias';
import { ConfigModal } from 'src/app/interfaces/config-modal';
import { ProductosService } from 'src/app/Services/productos.service';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { ModalConfirmacionComponent } from '../modal-confirmacion/modal-confirmacion.component';
import formatearDinero from 'src/app/helpers/formatoMoneda';
import leerToken from 'src/app/helpers/decodificarToken'
import { ActivatedRoute } from '@angular/router';
import decodificarToken from 'src/app/helpers/decodificarToken';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {

  @Input() listarProducto: any
  @Input() categoria: Categoria | undefined;
  @Output() onEvento = new EventEmitter<boolean>();
  @Output() onEditarProducto = new EventEmitter<any>();

  estrellas: any = []
  usuarioActual: any = []
  productoActual: any
  AgregadoALista: boolean = false;
  idProducto: number
  idUsuario: number
  producto: any = []
  usuario: any = []

  constructor(private productoService: ProductosService, private usuarioService: UsuarioService, private modalService: NgbModal, private route: ActivatedRoute) {
    this.idProducto = this.route.snapshot.params["id"];
    this.idUsuario = this.route.snapshot.params["id"]
  }

  ngOnInit(): void {
    this.obtenerCalificacionProducto();
<<<<<<< HEAD
  //  this.agregarAListaDeseos();
    //this.eliminarDeListaDeseos();
=======
>>>>>>> c068ddc4693c3453d97ef0f5cad613b9fbdc6930
  }

  mostrarProducto() {
    //ESTO ES PARA MANDAR PUBLICIDAD DE LOS PRODUCTOS MAS VISTOS
    this.productoService.actualizarContador(this.listarProducto.idProducto).subscribe(res => {
      //console.log(res)

    }, err => {
      console.log(err)
    })

    
  }


  /*AGREGAR FUNCION SI EL USUARIO ACTUAL NO ES QUIEN AGREGÓ UN PRODUCTO ENTONCES QUE NO PUEDA ELIMINAR O EDITAR*/
  modalEliminar() {
    let modalRef: NgbModalRef;
    modalRef = this.modalService.open(ModalConfirmacionComponent)
    let configuracion: ConfigModal = {
      titulo1: '¿Está seguro de eliminar el producto?',
      titulo2: 'Se eliminará el producto',
      parametros: { eliminarProducto: true, idProducto: this.listarProducto.idProducto }
    }

    modalRef.componentInstance.mensaje = configuracion

    modalRef.componentInstance.onEvento.subscribe((res: any) => [
      this.onEvento.emit(true)
    ])
  }


  editarProducto() {

    this.onEditarProducto.emit(this.listarProducto)
  }

  formatoDinero(cantidad: any) {
    return formatearDinero(cantidad)
  }

  comprobarEsVendedor(objProducto: any) {
    let token = leerToken()
    //console.log(objProducto)
    if (!token || !objProducto) return false;

    return objProducto?.idUsuario == token.idUsuario

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
    this.productoService.obtenerCalificacionProducto(this.listarProducto.idProducto).subscribe((res: any) => {
      this.estrellas = this.generarEstrellas(res)
      console.log(this.estrellas)
    }, err => {
      console.log(err)
    })
  }

<<<<<<< HEAD
/*  
agregarAListaDeseos(){
  this.ListaDeseosService.agregarAListaDeseos(this.productoActual.idProducto).subscribe(() => {
  this.AgregadoALista = true;
  })
}

eliminarDeListaDeseos(){
  this.ListaDeseosService.eliminarDeListaDeseos(this.productoActual.idProducto).subscribe(() => {
    this.AgregadoALista = false;
  })

}
=======
  obtenerUsuarioActual() {
>>>>>>> c068ddc4693c3453d97ef0f5cad613b9fbdc6930

    this.usuarioService.obtenerUsuarioActual().subscribe((res: any) => {
      this.usuarioActual = res;
    })

  }


*/

}
