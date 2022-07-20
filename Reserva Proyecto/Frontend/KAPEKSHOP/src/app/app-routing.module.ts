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
//import { formDenunciaComponent } from './Components/formDenuncia/formDenuncia.component';

//import { DetalleDeProductoComponent } from './Components/detalle-de-producto/detalle-de-producto.component';

//componentes
const routes: Routes = [
  {path: '', component:LandingComponent},
  {path: 'inicio', component:IniciarSesionComponent},
  {path:'registrar-usuario',component:RegistrarUsuarioComponent},
  {path:'producto',component:ProductoComponent},
 // {path:'formDenuncia',component:formDenunciaComponent},
  {path:'editar-usuario/:id', component:RegistrarUsuarioComponent, canActivate:[AuthGuard]},
  {path:'listar-productos', component:ListarProductosComponent},
  {path:'confirmar/:token', component:ValidarCorreoComponent},
  {path:'tienda', component:TiendaComponent, canActivate:[AuthGuard]},
  {path:'recuperar-contrasenia/:token', component:RecuperarContraseniaComponent},
  {path:'recuperar-contrasenia', component:SolicitarRecuperarContraseniaComponent},
  //{path:'tienda/:tipoUsuario/categorias', component:CategoriasComponent, canActivate:[AuthGuard]},
  {path:'categorias/:idCategoria', component:CategoriaComponent, canActivate:[AuthGuard]},
  {path:'categorias',component:CategoriasComponent},
  {path:'tienda/categorias/:idCategoria', component:CategoriaComponent, canActivate:[AuthGuard]},
//  {path: 'producto/detalle/:id', component: DetalleDeProductoComponent},
  {path:'**', redirectTo:'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
