import { Component, OnInit } from '@angular/core';
import {ProductoService} from 'src/app/service/producto.service';
import {Producto} from 'src/app/models/producto';
@Component({
  selector: 'app-ingresarproducto',
  templateUrl: './ingresarproducto.component.html',
  styleUrls: ['./ingresarproducto.component.css']
})
export class IngresarproductoComponent implements OnInit {

    nombreproducto: string ='';
    precioproducto: number = null;
    pesoproducto: number = null;
    estadoproducto: string ='';
    categoriaproducto: string ='';
   
    
    constructor(private productoService: ProductoService) { }
  
    ngOnInit(): void {
    }
  
    onCreate(): void{
      const producto =new Producto(this.nombreproducto,this.precioproducto,this.pesoproducto,this.estadoproducto,this.categoriaproducto);
      this.productoService.save(producto).subscribe(
        
        data => {
          alert('Producto guardado con exito!');
        },
        err=>{
          alert(err.error.mensaje + 'Fallo');
        }
      );
    }
  
}
