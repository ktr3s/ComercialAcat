import { Component, OnInit } from '@angular/core';
import {Carrito} from '../../models/carrito';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from 'src/app/service/carrito.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carritos: Carrito[];
  total:number;
  

  constructor(private activatedRoute: ActivatedRoute,
    private carritoService: CarritoService,
    private _location: Location,
    private router: Router) { }

  ngOnInit(): void {
    this.cargarProductos();
    
    
  }

  cargarProductos(): void{
    
    const estadoproducto = 'Activo';
    this.carritoService.listar().subscribe(
      data => {
        this.carritos=data;
        this.SumCtrl();
      },
      err => {
        alert(err.error.mensaje + 'Fallo');
        //this.router.navigate(['/']);
      }
    );
  }

  SumCtrl(){
    //Calculamos el TOTAL 
    this.total = this.carritos.reduce((
      acc,
      obj,
    ) => acc += (obj.precioproducto ),
    0);
    console.log("Total: ", this.total)
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
  volver(): void{
    //this.router.navigate(['/']);
    this._location.back();
  }

  
  
}
