import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Categoria } from 'src/app/interfaces/Categorias';
import { ConfigModal } from 'src/app/interfaces/config-modal';
import { ProductosService } from 'src/app/Services/productos.service';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { ModalConfirmacionComponent } from '../modal-confirmacion/modal-confirmacion.component';
//import formatearDinero  from 'src/app/helpers/formatoMoneda';
import leerToken from 'src/app/helpers/decodificarToken'

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {

  @Input() producto:any;
  @Input() listarProducto:any
  @Input() categoria:Categoria | undefined;
  @Output() onEvento = new EventEmitter<boolean>();
  @Output() onEditarProducto = new EventEmitter<any>();
 
  estrellas:any
  usuarioActual: any

  constructor(private productoService: ProductosService, private usuarioService:UsuarioService, private modalService:NgbModal) { }

  ngOnInit(): void {
    
  }

  mostrarProducto(){
    //ESTO ES PARA MANDAR PUBLICIDAD DE LOS PRODUCTOS MAS VISTOS
    this.productoService.actualizarContador(this.listarProducto.idProducto).subscribe( res => {
      //console.log(res)
      
    }, err => {
      console.log(err)
    })

    // Mostrar el componente producto
  }

  
  /*AGREGAR FUNCION SI EL USUARIO ACTUAL NO ES QUIEN AGREGÓ UN PRODUCTO ENTONCES QUE NO PUEDA ELIMINAR O EDITAR*/
  obtenerUsuarioActual() {
    this.usuarioService.obtenerUsuarioActual().subscribe( (res:any) => {
      this.usuarioActual = res;
    })
  }

  modalEliminar(){
    let modalRef:NgbModalRef;
    modalRef = this.modalService.open(ModalConfirmacionComponent)
    let configuracion:ConfigModal = {
      titulo1: '¿Está seguro de eliminar el producto?',
      titulo2:'Se eliminará el producto',
      parametros:{eliminarProducto:true, idProducto:this.listarProducto.idProducto}
    }
   
    modalRef.componentInstance.mensaje = configuracion
    
    modalRef.componentInstance.onEvento.subscribe((res:any)=>[
      this.onEvento.emit(true)
    ])
  }


  editarProducto(){
    
    this.onEditarProducto.emit(this.listarProducto)
  }

 formatoDinero(cantidad:any){
   // return formatearDinero(cantidad)
  }

  comprobarEsVendedor(objProducto:any){
    let token = leerToken()
    //console.log(objProducto)
    if(!token || !objProducto) return false;
    
    return objProducto?.idCliente == token.idUsuario
    
  }

}
