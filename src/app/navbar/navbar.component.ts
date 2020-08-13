import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  router: string;
  
  
  constructor(private _router: Router){
    this.router = _router.url; 
    
  }
   
  filterProducto='';

  ngOnInit(): void {
  }

  /*
  buscarPalabra(palabraBuscada:string){
    this.router.navigate(['productos/',palabraBuscada]);
  }
*/

}
