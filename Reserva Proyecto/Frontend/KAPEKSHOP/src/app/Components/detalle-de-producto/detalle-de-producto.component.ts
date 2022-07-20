import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/Categorias';
import { Producto } from 'src/app/models/producto';
import { CategoriasService } from 'src/app/Services/categorias.service';
import { ProductosService } from 'src/app/Services/productos.service';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { ListarProductosComponent } from '../listar-productos/listar-productos.component';


@Component({
  selector: 'app-detalle-de-producto',
  templateUrl: './detalle-de-producto.component.html',
  styleUrls: ['./detalle-de-producto.component.css']
})
export class DetalleDeProductoComponent implements OnInit {

  activatedRoute: any;
  imagenB64:any = null;
  listarProductos:any=[]
  categorias:Categoria[] = []

  productos:any = [ ];

  idProducto: number;
  producto: any[] = [];
  productoActual:any;

  @Input() imagenes:any = []
  mostarFormulario: boolean | undefined;

  constructor(private route: ActivatedRoute, private productosService: ProductosService) {
    this.idProducto = this.route.snapshot.params["id"];
  }

  ngOnInit() {
    this.obtenerPorId()

  }


  obtenerPorId() {
    this.productosService.obtenerPorId(this.idProducto).subscribe({
      error: (error) => {
        console.log(error)
      },
      next: (data) => {
        console.log(data)
        this.producto=data;
        imagen: this.imagenB64
      }
    })

  }

  async fileChangeEvent(event:any) {
    if(event.length != 0){
      this.imagenB64 = await this.toBase64(event[0])
    }
    //console.log(event.length)
    
  }

  //para varias imagenes
  async convertirImagen(evento:any){
    
    console.log(evento);
    //creamos variable para convertir imagen a base64. Si no se puede pues se hace un for xD
    for(let i=0;i<evento.length;i++){

      let base64 = await this.toBase64(evento[i]);
      this.imagenes.push( {name: evento[i].name, base64: base64})
    }
    //esto s ele debe de mandar al backend
    
  }
  setActualizarImagenes(imagenes:any) {
    // Esta función se dispara cuando se borra una imagen desde el componente de visualización de imagenes
    this.imagenes = imagenes
  }

  toBase64 = (file:any) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

setMostrarFormulario() {
  this.mostarFormulario = !this.mostarFormulario;
}

mostrarProductos(){
  this.mostarFormulario=false
  this.productosService.obtenerProductoActual(this.productoActual.idProducto).subscribe((res:any)=>{
    console.log(res)
  }, (err:any)=>{
    
  })
}


}


