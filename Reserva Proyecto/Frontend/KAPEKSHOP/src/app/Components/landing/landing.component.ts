import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import leerToken from 'src/app/helpers/decodificarToken';
import { ProductosService } from 'src/app/Services/productos.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {


  constructor(private productosService: ProductosService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

}
