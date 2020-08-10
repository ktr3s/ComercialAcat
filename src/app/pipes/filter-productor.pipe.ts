import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProductor'
})
export class FilterProductorPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultProductores = [];
    for (const productor of value) {
      if (productor.nombreproductor.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
      productor.apellidoproductor.toLowerCase().indexOf(arg.toLowerCase()) > -1 
      ) {
        resultProductores.push(productor);
      };
    };
    return resultProductores;
  }

}
