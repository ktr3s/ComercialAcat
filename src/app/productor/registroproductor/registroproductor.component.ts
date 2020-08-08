import { Component, OnInit } from '@angular/core';
import { ProductorService } from 'src/app/service/productor.service';
import { Productor } from 'src/app/models/productor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registroproductor',
  templateUrl: './registroproductor.component.html',
  styleUrls: ['./registroproductor.component.css']
})
export class RegistroproductorComponent implements OnInit {

  nombreproductor: string ='';
  apellidoproductor: string ='';
  emailproductor: string ='';
  claveproductor: string ='';
  telefonoproductor: string ='';


  constructor(private router: Router, private productorService: ProductorService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const productor =new Productor(this.nombreproductor,this.apellidoproductor,this.emailproductor,this.claveproductor,this.telefonoproductor);
    this.productorService.save(productor).subscribe(
      data => {
        alert('Productor guardado con exito');
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
