import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../service/producto.service';
import {Producto} from '../../models/producto';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'app-listarproductoscliente',
  templateUrl: './listarproductoscliente.component.html',
  styleUrls: ['./listarproductoscliente.component.css']
})
export class ListarproductosclienteComponent implements OnInit {

  productos: Producto[];
  producto: Producto = null;

  constructor(private activatedRoute: ActivatedRoute,
    private productoService: ProductoService,private carritoService: CarritoService,
    private router: Router) { }

  ngOnInit(): void {
    this.cargarProductos();
    
  }

  cargarProductos(): void{
    
    const estadoproducto = 'Activo';
    this.productoService.listarestado(estadoproducto).subscribe(
      data => {
        this.productos=data;
      },
      err => {
        alert(err.error.mensaje + 'Fallo');
        //this.router.navigate(['/']);
      }
    );
  }

  borrar(idproducto: number){
    this.carritoService.delete(idproducto).subscribe(
      data => {
        alert('Producto eliminado');
        this.cargarProductos();
      },
      err=>{
        alert(err.error.mensaje + ' Fallo');
      }

    );
  }

  guardarCarrito(idproducto: number){
    this.productoService.detail(idproducto).subscribe(
      data => {
        this.producto = data;
      },
      err => {
        alert(err.error.mensaje + 'Fallo');
        //this.router.navigate(['/']);
        //this.volver();
      }
    );
  }
}
