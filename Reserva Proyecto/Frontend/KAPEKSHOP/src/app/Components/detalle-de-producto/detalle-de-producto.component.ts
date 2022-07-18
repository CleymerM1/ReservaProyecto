import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/Services/productos.service';
import { ActivatedRoute } from "@angular/router";
import { Producto } from 'src/app/models/producto';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-detalle-de-producto',
    templateUrl: './detalle-de-producto.component.html',
    styleUrls: ['./detalle-de-producto.component.css']
})
export class DetalleDeProductoComponent implements OnInit {
    public producto = {
        id: 0,
        imagen: [],
        nombre: "",
        ubicacion: "",
        estado: "",
        descripcion: "",
        precio: "",
    };

    /*public fotoSeleccionada: string;
    public indiceSeleccionado = 0;
    public yaExiste: boolean;*/

    constructor(private ProductosService: ProductosService, private activatedRoute: ActivatedRoute) {

    }
    ngOnInit(): void {
    }

    /*ublic resolverFoto(foto) {
      const baseUrl = environment.baseUrl;
      return `${baseUrl}/foto_producto/${foto}`;
    }
  
    public seleccionarImagen(indice) {
      this.indiceSeleccionado = indice;
      this.fotoSeleccionada = this.producto.fotos[this.indiceSeleccionado].foto;
    }*/

    /*async ngOnInit() {
      const id = this.activatedRoute.snapshot.paramMap.get("id")
      this.producto = await this.productosService.obtenerProductoConFotosPorId(id);
      if (this.producto.fotos.length >= 0) {
        this.seleccionarImagen(0);
      }
      this.refrescarEstado();
    }*/

}