/*
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ModalErrorComponent} from 'src/app/Components/modal-error/modal-error.component'
import { ModalExitoComponent } from 'src/app/Components/modal-exito/modal-exito.component';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Denuncias } from 'src/app/models/denuncias';
import { DenunciasService } from 'src/app/Services/denuncias.service'
import { ConfigModal} from 'src/app/interfaces/config-modal'

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-formDenuncia',
  templateUrl: './formDenuncia.component.html',
  styleUrls: ['./formDenuncia.component.css']
})
export class formDenunciaComponent implements OnInit {
    checked = false;
    hide = true;
  
    constructor( private modalService: NgbModal, private router: Router, private denunciasService:DenunciasService ) { 
    }
    abrirModal( modal:any ){
  
      this.modalService.open(
        modal,
        {
          size: 'xs',
          centered: true
        }
        );
  
      }
      formularioRegistro = new FormGroup( {
        opcionFormControl: new FormControl("", [Validators.required]),
        razonFormControl: new FormControl("", [Validators.required]),
        otrosFormControl: new FormControl('',[Validators.required]),
      })
      enviarFormulario(){
      
        if( !this.formularioRegistro.invalid) {
  
          let usuario = {
            opcion:this.formularioRegistro.get('opcionFormControl')?.value,
            razon: this.formularioRegistro.get('razonFormControl')?.value,
            otros:this.formularioRegistro.get('otrosCompletoFormControl')?.value,
          }
  
  
          this.denunciasService.crearDenuncia(Denuncias).subscribe( (res:any) => {
            console.log(res)
            let config:ConfigModal = {
              titulo1: '¡Excelente!',
              titulo2: res.msj
            }
            this.open('exito',config )
            this.router.navigateByUrl('/inicio')
          }, (err:any) => {
            let config:ConfigModal = {
              titulo1: '¡Error!',
              titulo2: err.error.msj ||'No se pudo registrar el usuario'
            }
            console.log(err)
            this.open('error',config )
          })
        }
  
        
      }
      
      enviarAInicio(modal:any){
        modal.close('Close click')
        this.router.navigateByUrl("/login");
    
      }
      matcher = new MyErrorStateMatcher();
    ngOnInit(): void {
    }

    open(tipoModal:string, config:ConfigModal) {


      let modalRef:NgbModalRef;
      switch (tipoModal) {
  
        case 'exito':
          modalRef = this.modalService.open(ModalExitoComponent)
          modalRef.componentInstance.mensaje = config
  
          break;
        case 'error':
          modalRef = this.modalService.open(ModalErrorComponent)
          modalRef.componentInstance.mensaje = config
          break;
      
        default:
          break;
      }
    }
   
  


  }
 

*/




  