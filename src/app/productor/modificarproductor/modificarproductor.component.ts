import { Component, OnInit } from '@angular/core';
import { Productor } from 'src/app/models/productor';
import { ProductorService } from 'src/app/service/productor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificarproductor',
  templateUrl: './modificarproductor.component.html',
  styleUrls: ['./modificarproductor.component.css']
})
export class ModificarproductorComponent implements OnInit {

  
  productor: Productor = null;
  constructor(
    private productorService: ProductorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    const idproductor = this.activatedRoute.snapshot.params.idproductor;
    this.productorService.detail(idproductor).subscribe(
      data => {
        this.productor=data;
      },
      err => {
        alert(err.error.mensaje + 'Fallo');
        //this.router.navigate(['/']);
      }

    );
  }
  onUpdate(): void{
    const idproductor = this.activatedRoute.snapshot.params.idproductor;
    this.productorService.update(idproductor, this.productor).subscribe(
      data => {
        alert('Productor actualizado con exito');
        this.router.navigate(['acat_admin/listarproductores']);
      },
      err=>{
        alert(err.error.mensaje + 'Fallo');
      }
    );
  }

  volver(): void{
    this.router.navigate(['acat_admin/listarproductores']);
  }

}
