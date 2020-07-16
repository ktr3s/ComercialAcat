import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import {UsuarioService} from '../../service/usuario.service';

@Component({
  selector: 'app-listarusuarios',
  templateUrl: './listarusuarios.component.html',
  styleUrls: ['./listarusuarios.component.css']
})
export class ListarusuariosComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void{
    this.usuarioService.listar().subscribe(
      data => {
        this.usuarios = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  borrar(idusuario: number){
    this.usuarioService.delete(idusuario).subscribe(
      data => {
        alert('Usuario eliminado');
        this.cargarUsuarios();
      },
      err=>{
        alert(err.error.mensaje + ' Fallo');
      }

    );
  }

}
