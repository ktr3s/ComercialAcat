import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../service/producto.service';
import {Producto} from '../../models/producto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listarproductosestado',
  templateUrl: './listarproductosestado.component.html',
  styleUrls: ['./listarproductosestado.component.css']
})
export class ListarproductosestadoComponent implements OnInit {

  productos: Producto[];
  producto: Producto = null;
  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const estadoproducto = this.activatedRoute.snapshot.params.estadoproducto;
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
    this.productoService.delete(idproducto).subscribe(
      data => {
        alert('Producto eliminado');
        this.ngOnInit();
      },
      err=>{
        alert(err.error.mensaje + ' Fallo');
      }

    );
  }
}
