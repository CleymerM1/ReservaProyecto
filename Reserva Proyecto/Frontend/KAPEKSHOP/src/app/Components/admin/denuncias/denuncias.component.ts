import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.component.html',
  styleUrls: ['./denuncias.component.css']
})
export class DenunciasComponent implements OnInit {

  denuncias = [
    {id: 1, idUsuario:1, usuarioVendedor:1, producto:'Aquí todo el objeto de producto', asunto: 'Denuncia comportamiento inapropiado', descripcion: 'El vendedor no cumplio con...',  fecha: '2020-01-01', estado: 'Pendiente'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  eliminarDenuncia(id: number){
    this.denuncias = this.denuncias.filter(denuncia => denuncia.id !== id);
  }

  tomarDenuncia(){
    console.log("Eliminar cuenta del usuario")
  }

}
