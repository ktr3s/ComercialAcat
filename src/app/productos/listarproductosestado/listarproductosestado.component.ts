import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../service/producto.service';
import {Producto} from '../../models/producto';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-listarproductosestado',
  templateUrl: './listarproductosestado.component.html',
  styleUrls: ['./listarproductosestado.component.css']
})
export class ListarproductosestadoComponent implements OnInit {

  productos: Producto[];
  producto: Producto = null;
  filterProducto='';
  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 

    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }
   
   this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
         // trick the Router into believing it's last link wasn't previously loaded
         this.router.navigated = false;
         // if you need to scroll back to top, here is the right place
         window.scrollTo(0, 0);
      }
  });
  }

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
