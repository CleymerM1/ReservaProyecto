import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarUsuarioComponent } from './Components/registrar-usuario/registrar-usuario.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ListarProductosComponent } from './Components/listar-productos/listar-productos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './Components/landing/landing.component';
import { MatInputModule } from '@angular/material/input'
import { MatRadioModule} from '@angular/material/radio'
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HeaderComponent } from './Components/landing/header/header.component';
import { BodyComponent } from './Components/landing/body/body.component';
import { FooterComponent } from './Components/landing/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalErrorComponent } from './Components/modal-error/modal-error.component';
import { ModalExitoComponent } from './Components/modal-exito/modal-exito.component';
import { ValidarCorreoComponent } from './Components/validar-correo/validar-correo.component';
import { IniciarSesionComponent } from './Components/iniciar-sesion/iniciar-sesion.component';
import { CategoriaComponent } from './Components/categoria/categoria.component';
import { CardProductoComponent } from './Components/card-producto/card-producto.component';
import { TiendaComponent } from './Components/tienda/tienda.component';
import { RecuperarContraseniaComponent } from './Components/recuperar-contrasenia/recuperar-contrasenia.component';
import { SolicitarRecuperarContraseniaComponent } from './Components/solicitar-recuperar-contrasenia/solicitar-recuperar-contrasenia.component';
import { CategoriasComponent } from './Components/categorias/categorias.component';
import { CardCategoriaComponent } from './Components/card-categoria/card-categoria.component';
import { DialogoUsuarioComponent } from './Components/dialogo-usuario/dialogo-usuario.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ModalNuevaCategoriaComponent } from './Components/modal-nueva-categoria/modal-nueva-categoria.component';


//import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    InicioComponent,
    ListarProductosComponent,
    LandingComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ModalErrorComponent,
    ModalExitoComponent,
    ValidarCorreoComponent,
    IniciarSesionComponent,
    CategoriaComponent,
    CardProductoComponent,
    TiendaComponent,
    RecuperarContraseniaComponent,
    SolicitarRecuperarContraseniaComponent,
    CategoriasComponent,
    CardCategoriaComponent,
    DialogoUsuarioComponent,
    ModalNuevaCategoriaComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgbModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatTooltipModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }