import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService{

  usuarioURL = 'http://localhost:8080/usuario/'

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.usuarioURL+'listar')
  }

  public detail(idusuario: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(this.usuarioURL+`detail/${idusuario}`)
  }

  public detailName(nombreusuario: string): Observable<Usuario>{
    return this.httpClient.get<Usuario>(this.usuarioURL+`detailname/${nombreusuario}`)
  }

  public save(usuario: Usuario):Observable<any>{
    return this.httpClient.post<any>(this.usuarioURL+'create',usuario);
  }

  public update(idusuario: number,usuario: Usuario):Observable<any>{
    return this.httpClient.put<any>(this.usuarioURL+`update/${idusuario}`,usuario);
  }

  public delete(idusuario: number ): Observable<any>{
    return this.httpClient.delete<any>(this.usuarioURL+`delete/${idusuario}`);
  }


}
