import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../service/producto.service';
import {Producto} from '../../models/producto';


@Component({
  selector: 'app-mostrarproducto',
  templateUrl: './mostrarproducto.component.html',
  styleUrls: ['./mostrarproducto.component.css']
})
export class MostrarproductoComponent implements OnInit {

  productos: Producto[];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void{
    this.productoService.listar().subscribe(
      data => {
        this.productos = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  borrar(idproducto: number){
    this.productoService.delete(idproducto).subscribe(
      data => {
        alert('Producto eliminado');
        this.cargarProductos();
      },
      err=>{
        alert(err.error.mensaje + ' Fallo');
      }

    );
  }
}
