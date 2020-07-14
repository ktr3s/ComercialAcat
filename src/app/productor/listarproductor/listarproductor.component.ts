import { Component, OnInit } from '@angular/core';

import {Productor} from '../../models/productor';
import {ProductorService} from '../../service/productor.service';

@Component({
  selector: 'app-listarproductor',
  templateUrl: './listarproductor.component.html',
  styleUrls: ['./listarproductor.component.css']
})
export class ListarproductorComponent implements OnInit {

  productores: Productor[];

  constructor(private productorService: ProductorService) { }

  ngOnInit(): void {
    this.cargarProductores();
  }

  cargarProductores(): void{
    this.productorService.listar().subscribe(
      data => {
        this.productores = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  borrar(idproductor: number){
    alert('Esta seguro de eliminar el productor con ID = '+idproductor);
  }
}
