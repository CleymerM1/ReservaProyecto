import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/interfaces/Categorias';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { TransitionCheckState } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/Services/productos.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  imagenes: any = []
  activatedRoute: any;
  constructor(private productosService: ProductosService, private usuarioService: UsuarioService,
    private route: ActivatedRoute, private router: Router) { }
  @Input() categoriaActual: Categoria | any = {};
  usuarioActual: any;
  ngOnInit(): void {
    this.formularioCrear.get('categoriaFormControl')?.setValue(this.categoriaActual.nombreCategoria)
    console.log(this.categoriaActual.nombreCategoria)
    this.obtenerUsuarioActual()

    this.editarProducto()
  }

  formularioCrear = new FormGroup({
    nombreFormControl: new FormControl("", [Validators.required]),
    categoriaFormControl: new FormControl(this.categoriaActual?.nombreCategoria),
    costoFormControl: new FormControl("", [Validators.required]),
    ubicacionFormControl: new FormControl("", Validators.required),
    estadoFormControl: new FormControl('', [Validators.required]),
    descripcionFormControl: new FormControl('', [Validators.required]),

  })
  enviarFormulario() {

    if (!this.formularioCrear.invalid) {

      let producto = {
        nombre: this.formularioCrear.get('nombreFormControl')?.value,
        categoria: this.categoriaActual.idCategoria,
        costo: this.formularioCrear.get('costoFormControl')?.value,
        estado: this.formularioCrear.get('estadoFormControl')?.value,
        descripcion: this.formularioCrear.get('descripcionFormControl')?.value,
        ubicacion: this.formularioCrear.get('ubicacionFormControl')?.value,
        idUsuario: this.usuarioActual.idUsuario,


      }

      this.productosService.crear(producto).subscribe((res: any) => {
        console.log(res)

      })
    }


  }

  async convertirImagen(evento: any) {

    console.log(evento);
    //creamos variable para convertir imagen a base64. Si no se puede pues se hace un for xD
    for (let i = 0; i < evento.length; i++) {

      let base64 = await this.toBase64(evento[i]);
      this.imagenes.push({ name: evento[i].name, base64: base64 })
    }
    //esto s ele debe de mandar al backend


  }

  setActualizarImagenes(imagenes: any) {
    // Esta función se dispara cuando se borra una imagen desde el componente de visualización de imagenes
    this.imagenes = imagenes
  }

  toBase64 = (file: any) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  obtenerUsuarioActual() {
    this.usuarioService.obtenerUsuarioActual().subscribe((res: any) => {
      this.usuarioActual = res;
    })
  }

  

  
  editarProducto(): void {
    this.activatedRoute.params.subscribe(
      (      e: { [x: string]: any; })=>{
        let id=e['idProducto'];
      if(id){
        this.productosService.getProducto(id).subscribe(
          es=>this.editarProducto=es
        );
      }      }
    );
    }
  }