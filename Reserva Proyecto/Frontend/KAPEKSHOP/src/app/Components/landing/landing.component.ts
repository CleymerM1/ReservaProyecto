import { Component, OnInit } from '@angular/core';
import leerToken from 'src/app/helpers/decodificarToken';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    leerToken();
  }

}
