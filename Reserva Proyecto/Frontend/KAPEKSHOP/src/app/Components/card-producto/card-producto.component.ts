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
import { Producto } from 'src/app/models/producto';
import { CategoriasService } from 'src/app/Services/categorias.service';

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
  usuarioActual: any
  productoActual: any
  idUsuario: any
  idProducto: any
  agregadoALista: boolean = false;

  producto: any = []


  constructor(private productoService: ProductosService, private usuarioService: UsuarioService, private modalService: NgbModal, private route: ActivatedRoute, 
    private categoriasService: CategoriasService) {
    this.idUsuario = this.route.snapshot.params["id"];
    this.idProducto = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.obtenerCalificacionProducto();
    this.obtenerUsuarioActual()
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

  obtenerUsuarioActual() {

    this.usuarioService.obtenerUsuarioActual().subscribe((res: any) => {
      this.usuarioActual = res;
      this.cargarListaDeseos(res.idUsuario)
    })

  }

  cargarListaDeseos(idUsuario: any) {
    this.productoService.obtenerFavoritos(idUsuario).subscribe((res: any) => {
      let categoria = this.listarProducto.idCategoria
      for(var i = 0; i <= res.datos.length; i++){
        if(this.listarProducto.idProducto == res.datos[i].idProducto && categoria == res.datos[i].idCategoria){
          this.agregadoALista = true;
        }
      }

    }, err => {
      console.log(err)
    })
  }

  aniadirFavoritos() {
    this.productoService.aniadirFavoritos(this.usuarioActual.idUsuario, this.listarProducto.idProducto).subscribe((res: any) => {
      console.log(res)
      this.agregadoALista = true;
    }, err => {
      console.log(err)
    })
  }

  eliminarFavorito(event: any) {
    const idProducto = event
    this.productoService.eliminarFavorito(this.usuarioActual.idUsuario, idProducto).subscribe(() => {
      this.agregadoALista = false;
    })
  }
}
