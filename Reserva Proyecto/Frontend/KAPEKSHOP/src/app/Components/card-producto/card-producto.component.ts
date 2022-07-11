import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {

  @Input() producto:any;
  @Input() listarProducto:any
  estrellas:any

  constructor() { }

  ngOnInit(): void {
    console.log(this.producto)
    console.log(this.listarProducto)
    this.estrellas = new Array(this.producto.valoracion).fill(1)
  }

}
