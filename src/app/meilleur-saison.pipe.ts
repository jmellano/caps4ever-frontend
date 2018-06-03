import { Pipe, PipeTransform } from '@angular/core';
import { VALID } from '@angular/forms/src/model';

@Pipe({name: 'meilleurSaison'})
export class MeilleurSaisonPipe implements PipeTransform {
  transform(value: any, best: boolean): any {
      if (best) {
          return value.filter(p => p.score > 0);
      }
    return value.filter(p => p.score <= 0);
  }
}
