import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogoUsuarioComponent  } from '../dialogo-usuario/dialogo-usuario.component';

export interface DialogData {
  usuario: 'vendedor' | 'comprador' ;
}


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  constructor(
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.openDialog()
  }

  openDialog() {

    this.dialog.open(DialogoUsuarioComponent, {
      data: {
        usuario: 'vendedor',
      },
    });
  }
  closeDialog() {

  }




}


