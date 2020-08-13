import {Routes} from "@angular/router";
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { ListarproductorComponent } from '../productor/listarproductor/listarproductor.component';
import { DetalleproductorComponent } from '../productor/detalleproductor/detalleproductor.component';
import { RegistroproductorComponent } from '../productor/registroproductor/registroproductor.component';
import { ModificarproductorComponent } from '../productor/modificarproductor/modificarproductor.component';
import { MostrarproductoComponent } from '../productos/mostrarproducto/mostrarproducto.component';
import { DetalleproductoComponent } from '../productos/detalleproducto/detalleproducto.component';
import { ModificarproductoComponent } from '../productos/modificarproducto/modificarproducto.component';
import { IngresarproductoComponent } from '../productos/ingresarproducto/ingresarproducto.component';
import { ListarproductosestadoComponent } from '../productos/listarproductosestado/listarproductosestado.component';
import { ListarproductoscategoriaComponent } from '../productos/listarproductoscategoria/listarproductoscategoria.component';
import { RegistrarusuarioComponent } from '../usuario/registrarusuario/registrarusuario.component';
import { ModificarusuariosComponent } from '../usuario/modificarusuarios/modificarusuarios.component';
import { ListarusuariosComponent } from '../usuario/listarusuarios/listarusuarios.component';
import { LoginAdminComponent } from '../admin/login-admin/login-admin.component';



const routes: Routes = [];



export const adminRoutes: Routes =[
    
    {path:'',component: DashboardComponent},
    {path: 'listarproductores',component:ListarproductorComponent},
    {path: 'detalleproductor/:idproductor',component:DetalleproductorComponent},
    {path: 'registrarproductor',component:RegistroproductorComponent},
    {path: 'modificarproductor/:idproductor',component:ModificarproductorComponent},
    {path: 'listarproductos',component:MostrarproductoComponent},
    {path: 'detalleproducto/:idproducto',component:DetalleproductoComponent},
    {path: 'modificarproducto/:idproducto',component:ModificarproductoComponent},
    {path: 'registrarproducto',component:IngresarproductoComponent},
    {path: 'listarestado/:estadoproducto',component:ListarproductosestadoComponent},
    {path: 'listarproductoscategoria/:categoriaproducto',component:ListarproductoscategoriaComponent},
    {path: 'registrarusuario',component:RegistrarusuarioComponent},
    {path: 'modificarusuarios/:idusuario',component:ModificarusuariosComponent},
    {path: 'listarusuarios',component:ListarusuariosComponent},
    {path: 'login',component:LoginAdminComponent},
];

