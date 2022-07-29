import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {


  nuevoMensaje:string="";
  emisor: Usuario |undefined;

  constructor() { }

  ngOnInit(): void {
  }

  enviarMensaje(){
    console.log(this.nuevoMensaje)
  }

  seleccionarDestinatario(event:any){
    this.emisor= event;
  }

}
