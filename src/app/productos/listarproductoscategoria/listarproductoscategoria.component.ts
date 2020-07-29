import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../service/producto.service';
import {Producto} from '../../models/producto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listarproductoscategoria',
  templateUrl: './listarproductoscategoria.component.html',
  styleUrls: ['./listarproductoscategoria.component.css']
})
export class ListarproductoscategoriaComponent implements OnInit {
  category: string;
  title: string;
  productos: Producto[];
  producto: Producto = null;
  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    
    const categoriaproducto = this.activatedRoute.snapshot.params.categoriaproducto;
    this.productoService.listarcategoria(categoriaproducto).subscribe(
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
