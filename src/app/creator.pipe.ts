import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creator'
})
export class CreatorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
