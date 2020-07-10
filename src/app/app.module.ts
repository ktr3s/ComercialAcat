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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    RegistroproductorComponent,
    LoginproductorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {path: 'registrarproductor',component:RegistroproductorComponent}
   ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
