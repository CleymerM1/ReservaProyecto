import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-modal-nueva-categoria',
  templateUrl: './modal-nueva-categoria.component.html',
  styleUrls: ['./modal-nueva-categoria.component.css']
})
export class ModalNuevaCategoriaComponent implements OnInit {

  categoriaAgregada = false;
  imagenB64:any = null;

  categoria = new FormGroup({
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    imagen: new FormControl()
  })
  
  constructor( public activeModal: NgbActiveModal, private usuarioService:UsuarioService ) { }

  ngOnInit(): void {
  }

  agregarCategoria(event:Event){
    event.preventDefault()
    let objCategoria = {
      nombre: this.categoria.get('nombre')?.value,
      descripcion: this.categoria.get('descripcion')?.value,
      imagen: this.imagenB64
    }
    this.usuarioService.nuevaCategoria(objCategoria).subscribe( (res:any) => {
      this.categoriaAgregada = true;
      this.activeModal.close();
    }, (err:any) => {
      this.categoriaAgregada = false;
    });
  }

  async fileChangeEvent(event:any) {
    if(event.target.files.length != 0){
      this.categoria.get("imagen")?.setValue(event.target.files[0].name)
      this.imagenB64 = await this.toBase64(event.target.files[0])
    }
    console.log(this.imagenB64)
    console.log(this.categoria.value)

  }

  toBase64 = (file:any) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

}
