import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultProductos = [];
    for (const producto of value) {
      if (producto.nombreproducto.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
      producto.estadoproducto.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
      producto.categoriaproducto.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
      producto.pesoproducto.toLowerCase().indexOf(arg.toLowerCase()) > -1 
      ) {
        resultProductos.push(producto);
      };
    };
    return resultProductos;
  }

}
