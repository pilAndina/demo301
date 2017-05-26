import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    let result = '';
    for(let i = value.length -1; i >= 0; i--){
      result+= value[i];
    }
    return result;
    //return value.split("").reverse().join("");
  }
}
