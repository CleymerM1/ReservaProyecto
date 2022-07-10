import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/interfaces/Categorias';
import { CategoriasService } from 'src/app/Services/categorias.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias:Categoria[] = [

  ]

  productos:any = [
    {imagen: 'camara.jpg', valoracion: 4, precio:1000},
  ];

  @Input() categoriaActual:Categoria | undefined;

  constructor( private route: ActivatedRoute, private categoriaService:CategoriasService) { }

  mostarFormulario = false;

  ngOnInit(): void {
    let idCategoria = parseInt(this.route.snapshot.paramMap.get('idCategoria') || "")
    //this.categoriaActual = this.categorias.filter(cat => cat.idCategoria == idCategoria)[0]
    this.obtenerCategoria(idCategoria)
    this.obtenerProductos()

  }


  obtenerProductos() {
    console.log(`Obteniendo los productos para la categoría: `)
    console.log(this.categoriaActual)
  }

  setMostrarFormulario() {
    this.mostarFormulario = !this.mostarFormulario;
  }

  obtenerCategoria(idCategoria:number) {
    this.categoriaService.getCategoria(idCategoria).subscribe( (res:any) => {
      this.categoriaActual = res;
      console.log(res)
    })
  }

}
