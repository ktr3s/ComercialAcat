import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultUsuarios = [];
    for (const usuario of value) {
      if (usuario.nombreusuario.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
      usuario.apellidousuario.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
      usuario.emailusuario.toLowerCase().indexOf(arg.toLowerCase()) > -1 
      ) {
        resultUsuarios.push(usuario);
      };
    };
    return resultUsuarios;
  }

}
