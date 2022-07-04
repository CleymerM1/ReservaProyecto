import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/Categorias';

@Component({
  selector: 'app-card-categoria',
  templateUrl: './card-categoria.component.html',
  styleUrls: ['./card-categoria.component.css']
})
export class CardCategoriaComponent implements OnInit {

  @Input() categoria:Categoria | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log(typeof this.categoria)
  }

}
