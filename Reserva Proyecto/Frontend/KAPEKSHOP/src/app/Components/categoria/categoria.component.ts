import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/interfaces/Categorias';
import { CategoriasService } from 'src/app/Services/categorias.service';
import { ProductosService } from 'src/app/Services/productos.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  //agregada 
  listarProductos:any=[]
  categorias:Categoria[] = [

  ]

  productos:any = [
    {imagen: 'camara.jpg', valoracion: 4, precio:1000},
  ];

  @Input() categoriaActual:Categoria | undefined;
  @Input() editandoProducto =false;
  productoActual:any
  

  constructor( private route: ActivatedRoute, private categoriaService:CategoriasService, private productosService:ProductosService) { }

  mostarFormulario = false;

  ngOnInit(): void {
    let idCategoria = parseInt(this.route.snapshot.paramMap.get('idCategoria') || "")
<<<<<<< HEAD
    this.obtenerCategoria(idCategoria)
    this.obtenerProductos()
=======
    //this.categoriaActual = this.categorias.filter(cat => cat.idCategoria == idCategoria)[0]
    this.obtenerCategoria(idCategoria)
    
>>>>>>> 27e7690a7474dd7b9f5c8e2750f57e91d5f284bb

  }


  obtenerProductosPorId() {
    console.log(`Obteniendo los productos para la categoría: `)
    console.log(this.categoriaActual)
    this.mostarFormulario=false
    this.productosService.getProductoPorCategoria(this.categoriaActual?.idCategoria).subscribe((res:any)=>{
      this.listarProductos = res;
      this.editandoProducto=false
      
      console.log(res)
    }, (err:any)=>{
      console.log(this.listarProductos)
    })
    
  }

  editarProducto(objProducto:any){
    this.mostarFormulario=true
    this.editandoProducto = true
    this.productoActual = objProducto
    
  }

  setMostrarFormulario() {
    this.mostarFormulario = !this.mostarFormulario;
    this.editandoProducto=false
  }

  obtenerCategoria(idCategoria:number) {
    this.categoriaService.getCategoria(idCategoria).subscribe( (res:any) => {
      this.categoriaActual = res;
      this.obtenerProductosPorId()
      console.log(res)
    })
  }

}
