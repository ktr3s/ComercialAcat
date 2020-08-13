import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detalleproductocliente',
  templateUrl: './detalleproductocliente.component.html',
  styleUrls: ['./detalleproductocliente.component.css']
})
export class DetalleproductoclienteComponent implements OnInit {

  producto: Producto = null;

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _location: Location
  ) { }

  ngOnInit(): void {
    const idproducto = this.activatedRoute.snapshot.params.idproducto;
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
  volver(): void{
    //this.router.navigate(['/']);
    this._location.back();
  }
  guardarCarrito(idproducto: number){
    this.productoService.alcarrito(idproducto).subscribe(
      data => {
        
        this.producto = data;
        alert('Producto añadido al carrito');
        this.router.navigate(['/carrito']);
      },
      err => {
        alert(err.error.mensaje + 'Fallo');
        //this.router.navigate(['/']);
        //this.volver();
      }
    );
  }

}
