import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/interfaces/Categorias';
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

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    let idCategoria = parseInt(this.route.snapshot.paramMap.get('idCategoria') || "")
    this.categoriaActual = this.categorias.filter(cat => cat.idCategoria == idCategoria)[0]
    this.obtenerProductos()

  }


  obtenerProductos() {
    console.log(`Obteniendo los productos para la categoría: `)
    console.log(this.categoriaActual)
  }

}
