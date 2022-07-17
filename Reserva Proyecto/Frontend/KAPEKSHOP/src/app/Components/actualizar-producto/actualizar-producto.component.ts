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
  selector: 'app-actualizar-Producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class actualizarProductoComponent implements OnInit {
  imagenes: any = []
  activatedRoute: any;
  public idProducto:any;
  public productoForm:any;
  public producto:any={};
  productoActual: any;
  usuarioActual:any;

  constructor(private productosService: ProductosService, private usuarioService: UsuarioService,
    private route: ActivatedRoute, private router: Router) { }
  @Input() categoriaActual: Categoria | any = {};
  
  ngOnInit(): void {
    this.formularioCrear.get('categoriaFormControl')?.setValue(this.categoriaActual.nombreCategoria);
    this.obtenerIdProducto();
    this.obtenerProductoActual();
    
  }

  obtenerIdProducto(){
    this.route.params.subscribe( 
      params=>{ 
      this.idProducto=params['id']; 
      } 
    );
    console.log("Id del producto> ", this.idProducto)
  }

  formularioCrear = new FormGroup({
    nombreFormControl: new FormControl("", [Validators.required]),
    categoriaFormControl: new FormControl("", [Validators.required]),
    costoFormControl: new FormControl("", [Validators.required]),
    ubicacionFormControl: new FormControl("", Validators.required),
    estadoFormControl: new FormControl('', [Validators.required]),
    descripcionFormControl: new FormControl('', [Validators.required]),

  })
  enviarFormulario() {

    if (!this.formularioCrear.invalid) {

      this.productoForm = {
        idCategoria: 1,
        nombre: this.formularioCrear.get('nombreFormControl'),
        costo: this.formularioCrear.get('costoFormControl'),
        estado: this.formularioCrear.get('estadoFormControl'),
        descripcion: this.formularioCrear.get('descripcionFormControl'),
        ubicacion: this.formularioCrear.get('ubicacionFormControl')
      }

      this.productosService.editarProducto(this.idProducto, this.productoForm).subscribe((res: any) => {
        console.log("Esto nos devuelve. ",res)

      })
    }
    console.log("Esto le mandamos. ", this.productoForm)

  }

  actualizar(formulario:any){
    console.log("Esto mandamos", this.producto)
    if(formulario.valid){
      this.productosService.editarProducto(this.idProducto, this.producto).subscribe(res=>{
        console.log("Esto devuelve backend ", res)
        
      }, error=>{
        console.log("Error Actualizar ", error)
      })
    }else{
      console.log("Error en el formulario")
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

  obtenerProductoActual() {
    console.log("Asi inicia producto ", this.productoActual)
    this.productosService.obtenerProductoActual(this.idProducto).subscribe((res: any) => {
      this.producto = res[0];
      console.log("Asi se almacena. ", this.producto)
    })
  }

}
