import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificarusuario',
  templateUrl: './modificarusuario.component.html',
  styleUrls: ['./modificarusuario.component.css']
})
export class ModificarusuarioComponent implements OnInit {
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
  onUpdate(): void{
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