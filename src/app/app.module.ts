import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { RegistroproductorComponent } from './productor/registroproductor/registroproductor.component';
import { LoginproductorComponent } from './productor/loginproductor/loginproductor.component';
import { RouterModule, Routes } from '@angular/router';
import { IngresarproductoComponent } from './productos/ingresarproducto/ingresarproducto.component';
import { MostrarproductoComponent } from './productos/mostrarproducto/mostrarproducto.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrarusuarioComponent } from './usuario/registrarusuario/registrarusuario.component';
import { ModificarproductorComponent } from './productor/modificarproductor/modificarproductor.component';
import { ListarproductorComponent } from './productor/listarproductor/listarproductor.component';
import { DetalleproductorComponent } from './productor/detalleproductor/detalleproductor.component';
import { ModificarestadoproductoComponent } from './productos/modificarestadoproducto/modificarestadoproducto.component';
import { ListarusuariosComponent } from './usuario/listarusuarios/listarusuarios.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ModificarusuariosComponent } from './usuario/modificarusuarios/modificarusuarios.component';
import { ModificarproductoComponent } from './productos/modificarproducto/modificarproducto.component';
import { AdminComponent } from './admin/admin.component';
import { ListarproductoscategoriaComponent } from './productos/listarproductoscategoria/listarproductoscategoria.component';
import { ListarproductosclienteComponent } from './cliente/listarproductoscliente/listarproductoscliente.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ListarproductosestadoComponent } from './productos/listarproductosestado/listarproductosestado.component';
import { DetalleproductoComponent } from './productos/detalleproducto/detalleproducto.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { adminRoutes } from './admin/admin.routes';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { CategoriasComponent } from './cliente/categorias/categorias.component';
import { FilterProductorPipe } from './pipes/filter-productor.pipe';
import { FilterUserPipe } from './pipes/filter-user.pipe';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { DetalleproductoclienteComponent } from './cliente/detalleproductocliente/detalleproductocliente.component';
import { CarritoComponent } from './cliente/carrito/carrito.component';

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
    ModificarestadoproductoComponent,
    ListarproductorComponent,
    DetalleproductorComponent,
    ListarusuariosComponent,
    ModificarproductoComponent,
    ModificarusuariosComponent,
    AdminComponent,
    ListarproductoscategoriaComponent,
    ListarproductosclienteComponent,
    HomeComponent,
    FilterPipe,
    ListarproductosestadoComponent,
    DetalleproductoComponent,
    DashboardComponent,
    NavbarAdminComponent,
    CategoriasComponent,
    FilterProductorPipe,
    FilterUserPipe,
    LoginAdminComponent,
    DetalleproductoclienteComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      
      [
        
      //Productor------------------------------------------------------
    //{path: 'listarproductores',component:ListarproductorComponent},
    //{path: 'detalleproductor/:idproductor',component:DetalleproductorComponent},
    //{path: 'registrarproductor',component:RegistroproductorComponent},
    //{path: 'modificarproductor/:idproductor',component:ModificarproductorComponent},
    {path: 'loginproductor',component:LoginproductorComponent},
    //Producto---------------------------------------------------------------
    //{path: 'registrarproducto/:idproductor',component:IngresarproductoComponent},
    //{path: 'modificarestadoproducto',component:ModificarestadoproductoComponent},
    //{path: 'modificarproducto/:idproducto',component:ModificarproductoComponent},
    //{path: 'listarproductos',component:MostrarproductoComponent},
    //{path: 'listarproductoscategoria/:categoriaproducto',component:ListarproductoscategoriaComponent},
    //{path: 'listarestado/:estadoproducto',component:ListarproductosestadoComponent},
    {path: 'detalleproducto/:idproducto',component:DetalleproductoclienteComponent},
    //Usuario----------------------------------------------------------
    //{path: 'registrarusuario',component:RegistrarusuarioComponent},
    //{path: 'modificarusuario/:idusuario',component:ModificarusuarioComponent},
    //{path: 'modificarusuarios/:idusuario',component:ModificarusuariosComponent},
    //{path: 'listarusuarios',component:ListarusuariosComponent},
    //Cliente--------------------------------------------------------------
    {path: 'productos',component:ListarproductosclienteComponent},
    {path: 'carrito',component:CarritoComponent},
    {path: 'categoria/:categoriaproducto',component:CategoriasComponent},
    {path: '',component:HomeComponent},
    //Admin------------------------------------------------------------------------
    {path: 'acat_admin',component:AdminComponent, children: adminRoutes},
    //-----------------------------------------------------------------------------
    {path: '**', component: PageNotFoundComponent},
    
    
   ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

