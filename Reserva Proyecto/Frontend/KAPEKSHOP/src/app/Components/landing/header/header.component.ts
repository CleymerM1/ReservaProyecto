import { Component, Input, OnInit } from '@angular/core';
import leerToken from 'src/app/helpers/decodificarToken'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() urlItemActual:string = "/";



  token:any = leerToken();
  constructor() { }

  ngOnInit(): void {


  }

}
