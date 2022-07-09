import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransitionCheckState } from '@angular/material/checkbox';
import { ProductosService } from 'src/app/Services/productos.service';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  imagenes:any=[]
  constructor(private productosService:ProductosService) { }

  ngOnInit(): void {
  }

  //eliminarProducto(Producto: any){
    //if(confirm('¿Seguo que desea eliminar?'))
    //this.productosService.eliminarProducto(Producto).subscribe((data)=>{
      //this.getProductos();

   // })
  //}

  eliminarProducto(Producto: string) {
    if(confirm('Seguro que desea eliminar?')) {
      this.productosService.delete(Producto);
    }
  }




  formularioCrear = new FormGroup( {
    nombreFormControl: new FormControl("", [Validators.required]),
    categoriaFormControl:new FormControl("",Validators.required),
    costoFormControl: new FormControl("", [Validators.required]),
    ubicacionFormControl: new FormControl("",Validators.required),
    estadoFormControl : new FormControl('', [Validators.required]),
    descripcionFormControl: new FormControl('',[Validators.required]),
    
  })
  enviarFormulario(){
    
    if( !this.formularioCrear.invalid) {

      let producto = {
        nombre: this.formularioCrear.get('nombreFormControl')?.value,
        categoria: this.formularioCrear.get('categoriaFormControl')?.value,
        costo:this.formularioCrear.get('costoFormControl')?.value,
        estado:this.formularioCrear.get('estadoFormControl')?.value,
        descripcion:this.formularioCrear.get('descripcionFormControl')?.value,
        ubicacion: this.formularioCrear.get('ubicacionFormControl')?.value,
        
        
      }

      this.productosService.crearProducto(producto).subscribe( (res:any) => {
        console.log(res)
    
      })
    }
    
    
  }

  async convertirImagen(evento:any){
    
    console.log(evento);
    //creamos variable para convertir imagen a base64. Si no se puede pues se hace un for xD
    for(let i=0;i<evento.length;i++){
      this.imagenes.push( await this.toBase64(evento?.target.files[i]))
    }
    //esto s ele debe de mandar al backend
    
    
  }

  toBase64 = (file:any) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});


}
