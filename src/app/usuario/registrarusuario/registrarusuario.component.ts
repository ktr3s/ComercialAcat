import { Component, OnInit } from '@angular/core';
import { UsuarioService} from 'src/app/service/usuario.service';
import { Usuario} from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarusuario',
  templateUrl: './registrarusuario.component.html',
  styleUrls: ['./registrarusuario.component.css']
})
export class RegistrarusuarioComponent implements OnInit {

  nombreusuario: string ='';
  apellidousuario: string ='';
  emailusuario: string ='';
  claveusuario: string ='';
  telefonousuario: string ='';
  direccionusuario: string ='';


  constructor(private router: Router,private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const usuario =new Usuario(this.nombreusuario,this.apellidousuario,this.emailusuario,this.claveusuario,this.telefonousuario, this.direccionusuario);
    this.usuarioService.save(usuario).subscribe(
      data => {
        alert('Usuario guardado con exito');
        this.router.navigate(['/acat_admin/listarusuarios']);
      },
      err=>{
        alert(err.error.mensaje + 'Fallo');
      }
    );
  }

  volver(): void{
    this.router.navigate(['/acat_admin/listarusuarios']);
  }
}
