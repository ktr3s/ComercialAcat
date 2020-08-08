import { Component, OnInit } from '@angular/core';
import { Productor } from 'src/app/models/productor';
import { ProductorService } from 'src/app/service/productor.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detalleproductor',
  templateUrl: './detalleproductor.component.html',
  styleUrls: ['./detalleproductor.component.css']
})
export class DetalleproductorComponent implements OnInit {

  productor: Productor = null;

  constructor
  (private productorService: ProductorService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const idproductor = this.activatedRoute.snapshot.params.idproductor;
    this.productorService.detail(idproductor).subscribe(
      data => {
        this.productor = data;
      },
      err => {
        alert(err.error.mensaje + 'Fallo');
        //this.router.navigate(['/']);
        //this.volver();
      }
    );

  }

  volver(): void{
    this.router.navigate(['acat_admin/listarproductores']);
  }

}
