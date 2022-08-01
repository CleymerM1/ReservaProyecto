import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { LandingComponent } from './Components/landing/landing.component';
import { ListarProductosComponent } from './Components/listar-productos/listar-productos.component';
import { RegistrarUsuarioComponent } from './Components/registrar-usuario/registrar-usuario.component';
import { categoria } from './models/categorias';
import { AuthGuard } from 'src/app/auth/auth.guard'
import { ValidarCorreoComponent } from './Components/validar-correo/validar-correo.component';
import { CategoriaComponent } from './Components/categoria/categoria.component';
import { TiendaComponent } from './Components/tienda/tienda.component';
import { RecuperarContraseniaComponent } from './Components/recuperar-contrasenia/recuperar-contrasenia.component';
import { IniciarSesionComponent } from './Components/iniciar-sesion/iniciar-sesion.component';
import { SolicitarRecuperarContraseniaComponent } from './Components/solicitar-recuperar-contrasenia/solicitar-recuperar-contrasenia.component';
import { CategoriasComponent } from './Components/categorias/categorias.component';
import { ProductoComponent } from './Components/producto/producto.component';
import { DenunciasComponent } from './Components/admin/denuncias/denuncias.component';
import { DetalleDeProductoComponent } from './Components/detalle-de-producto/detalle-de-producto.component';
import { FormDenunciaComponent } from './Components/form-denuncia/form-denuncia.component';
import { ListaDeDeseosComponent } from './Components/lista-de-deseos/lista-de-deseos.component';
<<<<<<< HEAD
import { AnunciosComponent } from './Components/admin/anuncios/anuncios.component';
=======
import { MensajeComponent } from './Components/mensaje/mensaje.component';
>>>>>>> c068ddc4693c3453d97ef0f5cad613b9fbdc6930

//componentes
const routes: Routes = [

  { path: '', component: LandingComponent },
  { path: 'anuncios', component: AnunciosComponent},
  { path: 'inicio', component: IniciarSesionComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'editar-usuario/:id', component: RegistrarUsuarioComponent, canActivate: [AuthGuard] },
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'confirmar/:token', component: ValidarCorreoComponent },
  { path: 'tienda', component: TiendaComponent, canActivate: [AuthGuard] },
  { path: 'recuperar-contrasenia/:token', component: RecuperarContraseniaComponent },
  { path: 'recuperar-contrasenia', component: SolicitarRecuperarContraseniaComponent },
  //{path:'tienda/:tipoUsuario/categorias', component:CategoriasComponent, canActivate:[AuthGuard]},
  { path: 'categorias/:idCategoria', component: CategoriaComponent, canActivate: [AuthGuard] },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'tienda/categorias/:idCategoria', component: CategoriaComponent, canActivate: [AuthGuard] },
  { path: 'producto/detalle/:id', component: DetalleDeProductoComponent, canActivate: [AuthGuard] },
  { path: 'form-denuncia/:id', component: FormDenunciaComponent },
  { path: 'producto/lista-de-deseos/:id', component: ListaDeDeseosComponent, canActivate: [AuthGuard] },
  {path: 'usuario/chat/:idUsuario',component: MensajeComponent},
  
  { path: '**', redirectTo: '', pathMatch: 'full' },

<<<<<<< HEAD
  { path: '', component: LandingComponent },
  { path: 'inicio', component: IniciarSesionComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'editar-usuario/:id', component: RegistrarUsuarioComponent, canActivate: [AuthGuard] },
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'confirmar/:token', component: ValidarCorreoComponent },
  { path: 'tienda', component: TiendaComponent, canActivate: [AuthGuard] },
  { path: 'recuperar-contrasenia/:token', component: RecuperarContraseniaComponent },
  { path: 'anuncios', component: AnunciosComponent},
  { path: 'recuperar-contrasenia', component: SolicitarRecuperarContraseniaComponent },
  //{path:'tienda/:tipoUsuario/categorias', component:CategoriasComponent, canActivate:[AuthGuard]},
  { path: 'categorias/:idCategoria', component: CategoriaComponent, canActivate: [AuthGuard] },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'tienda/categorias/:idCategoria', component: CategoriaComponent, canActivate: [AuthGuard] },
  { path: 'producto/detalle/:id', component: DetalleDeProductoComponent },
  { path: 'producto/lista-de-deseos', component: ListaDeDeseosComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
=======
  
>>>>>>> c068ddc4693c3453d97ef0f5cad613b9fbdc6930
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
