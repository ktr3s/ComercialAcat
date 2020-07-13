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
import { ModificarproductoComponent } from './productos/modificarproducto/modificarproducto.component';


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
    ModificarproductoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {path: 'registrarproductor',component:RegistroproductorComponent},
    {path: 'loginproductor',component:LoginproductorComponent},
    {path: 'modificarproductor',component:ModificarproductorComponent},
    {path: 'registrarproducto',component:IngresarproductoComponent},
    {path: 'modificarproducto',component:ModificarproductoComponent},
    {path: 'registrarusuario',component:RegistrarusuarioComponent},
    {path: '**', component: PageNotFoundComponent}
   ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
