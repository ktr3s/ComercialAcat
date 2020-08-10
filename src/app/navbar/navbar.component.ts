import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  router: any;

  //router: string;

  constructor(){}
   
  filterProducto='';

  ngOnInit(): void {
  }
  
  buscarPalabra(palabraBuscada:string){
    this.router.navigate(['productos/',palabraBuscada]);
  }

}
