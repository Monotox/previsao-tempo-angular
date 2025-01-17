import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius'
})
export class CelsiusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value - 273).toFixed(0) + ' °C';
  }

}
