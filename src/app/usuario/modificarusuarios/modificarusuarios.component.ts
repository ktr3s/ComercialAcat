import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/models/usuario';



@Component({
  selector: 'app-modificarusuarios',
  templateUrl: './modificarusuarios.component.html',
  styleUrls: ['./modificarusuarios.component.css']
})
export class ModificarusuariosComponent implements OnInit {
  usuario: Usuario = null;
  constructor(
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    const idusuario = this.activatedRoute.snapshot.params.idusuario;
    this.usuarioService.detail(idusuario).subscribe(
      data => {
        this.usuario=data;
      },
      err => {
        alert(err.error.mensaje + 'Fallo');
        //this.router.navigate(['/']);
      }

    );
  }

  onUpdateUsuario(): void{
    const idusuario = this.activatedRoute.snapshot.params.idusuario;
    this.usuarioService.update(idusuario, this.usuario).subscribe(
      data => {
        alert('Usuario actualizado con exito');
      },
      err=>{
        alert(err.error.mensaje + 'Fallo');
      }
    );
  } 


}