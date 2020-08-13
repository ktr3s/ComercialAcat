import { Component, OnInit } from '@angular/core';
import {Carrito} from '../../models/carrito';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carritos: Carrito[];
  

  constructor(private activatedRoute: ActivatedRoute,
    private carritoService: CarritoService,
    private router: Router) { }

  ngOnInit(): void {
    this.cargarProductos();
    
  }

  cargarProductos(): void{
    
    const estadoproducto = 'Activo';
    this.carritoService.listar().subscribe(
      data => {
        this.carritos=data;
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

}
