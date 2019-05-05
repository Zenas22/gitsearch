import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creator'
})
export class CreatorPipe implements PipeTransform {

  transform(value:any): number {
    let today:any = new Date();

    var dateDifference = Math.abs(today - value)
    const secondsPerDay = 86400;

    var dateDifferenceSeconds = dateDifference * 0.001;

    var dateCount = Math.round(dateDifferenceSeconds/secondsPerDay);

    if (dateCounter >= 1){
      return dateCount - 1;
    }else{
      return 0;
    }
  }

}
