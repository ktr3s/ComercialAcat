import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  category: string;
  title: string;
  productos: Producto[];
  producto: Producto = null;
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
  
  guardarCarrito(idproducto: number){
    this.productoService.alcarrito(idproducto).subscribe(
      data => {
        
        this.producto = data;
        alert('Producto añadido al carrito');
      },
      err => {
        alert(err.error.mensaje + 'Fallo');
        //this.router.navigate(['/']);
        //this.volver();
      }
    );
  }

}
