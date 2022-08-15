import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import leerToken from 'src/app/helpers/decodificarToken';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { ProductosService } from 'src/app/Services/productos.service';
import { Producto } from 'src/app/models/producto';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() urlItemActual: string = "/";
  @Output() onClickBurguer = new EventEmitter<boolean>()
  @Output () 


  usuarioActual: any;
  token: any = leerToken();
  busqueda: string = '';
  productosFiltrados: any = [];

  constructor(private authService: AuthService, private router: Router, private usuarioService: UsuarioService, private productoService: ProductosService) { }

  cerrar() {
    this.authService.cerrarSesion();
    this.router.navigateByUrl('/inicio')
  }

  mensaje() {
    this.router.navigateByUrl('/usuario/chat');
  }

  clickBurguer() {
    this.onClickBurguer.emit(true)

  }

  ngOnInit(): void {
    console.log(this.token);

    if (this.token?.correo) {
      this.usuarioService.getUsuario(this.token.correo).subscribe((res: any) => {
        this.usuarioActual = res;
        console.log(res)
      })
    }
  }

  comprobarUsuarioAdmin() {
    if (this.usuarioActual && this.usuarioActual.idRol == 3) {
      return true
    } else {
      return false
    }
  }

  comprobarUsuario() {
    if (this.usuarioActual) {
      return true
    } else {
      return false
    }
  }

  obtenerUsuarioActual() {

    this.usuarioService.obtenerUsuarioActual().subscribe((res: any) => {
      this.usuarioActual = res;
    })

  }

  modalBuscar() {
    let busq = this.busqueda.toLowerCase()
    this.productoService.getProductos().subscribe(data => {
      console.log(data)
      // this.productoService.filtrarProductos('busq', this.busqueda, productos);
      const data1 = data.filter((el: any) =>
        JSON.parse(el.nombre.toLowerCase().indexOf(busq)) > -1)
      console.log(data1)
      this.productosFiltrados= data1
    })
  }



}

