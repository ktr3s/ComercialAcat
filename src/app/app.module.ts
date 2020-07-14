import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { RegistroproductorComponent } from './productor/registroproductor/registroproductor.component';
import { LoginproductorComponent } from './productor/loginproductor/loginproductor.component';
import { RouterModule } from '@angular/router';
import { IngresarproductoComponent } from './productos/ingresarproducto/ingresarproducto.component';
import { MostrarproductoComponent } from './productos/mostrarproducto/mostrarproducto.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrarusuarioComponent } from './usuario/registrarusuario/registrarusuario.component';
import { ModificarproductorComponent } from './productor/modificarproductor/modificarproductor.component';
import { ListarproductorComponent } from './productor/listarproductor/listarproductor.component';
import { DetalleproductorComponent } from './productor/detalleproductor/detalleproductor.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    RegistroproductorComponent,
    LoginproductorComponent,
    IngresarproductoComponent,
    MostrarproductoComponent,
    PageNotFoundComponent,
    RegistrarusuarioComponent,
    ModificarproductorComponent,
    ListarproductorComponent,
    DetalleproductorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      //Productor------------------------------------------------------
    {path: 'listarproductor',component:ListarproductorComponent},
    {path: 'detalleproductor',component:DetalleproductorComponent},
    {path: 'registrarproductor',component:RegistroproductorComponent},
    {path: 'modificarproductor/:idproductor',component:ModificarproductorComponent},
    {path: 'loginproductor',component:LoginproductorComponent},
    //---------------------------------------------------------------
    {path: 'registrarproducto',component:IngresarproductoComponent},
    {path: 'registrarusuario',component:RegistrarusuarioComponent},
    {path: '**', component: PageNotFoundComponent},
    
   ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
