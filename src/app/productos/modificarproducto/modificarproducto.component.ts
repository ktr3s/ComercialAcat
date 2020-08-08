import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificarproducto',
  templateUrl: './modificarproducto.component.html',
  styleUrls: ['./modificarproducto.component.css']
})
export class ModificarproductoComponent implements OnInit {

  producto: Producto = null;
  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    const idproducto = this.activatedRoute.snapshot.params.idproducto;
    this.productoService.detail(idproducto).subscribe(
      data => {
        this.producto=data;
      },
      err => {
        alert(err.error.mensaje + 'Fallo');
        //this.router.navigate(['/']);
      }

    );
  }
  onUpdate(): void{
    const idproducto = this.activatedRoute.snapshot.params.idproducto;
    this.productoService.update(idproducto, this.producto).subscribe(
      data => {
        alert('Producto actualizado con exito');
        this.router.navigate(['/acat_admin/listarproductos']);
      },
      err=>{
        alert(err.error.mensaje + 'Fallo');
      }
    );
  }
  volver(): void{
    this.router.navigate(['/acat_admin/listarproductos']);
  }
}
