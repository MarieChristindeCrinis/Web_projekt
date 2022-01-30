import { Pipe, PipeTransform } from '@angular/core';
import { Race } from '../model/character';

@Pipe({
  name: 'racePipe'
})
export class RacePipePipe implements PipeTransform {

  transform(value: Race|undefined, ...args: unknown[]): unknown {
    if(!!value)
      return Race[value];
    return null;
  }

}
