import { Pipe, PipeTransform } from '@angular/core';
import { VALID } from '@angular/forms/src/model';

@Pipe({name: 'saisonEnCours'})
export class SaisonEnCoursPipe implements PipeTransform {
  transform(value: any, first: boolean): any {
      if (first) {
          return value.slice(0, 1);
      }
    return value.slice(1);
  }
}
