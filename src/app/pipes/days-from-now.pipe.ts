import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysFromNow'
})
export class DaysFromNowPipe implements PipeTransform {
  readonly msInDays: number = 24 * 60 * 60 * 1000;

  transform(value: string) : string {
    const val = Math.round(Math.abs(new Date().getTime() - new Date(value).getTime()) / this.msInDays);
    return val.toString();
    // if(value.constructor.name == 'String')
    //   value = new Date(value);
    // console.log('VALUE >>>', new Date(value).getDate(), 'TYPE >>>', value.constructor.name, '\n\n');
    // return '%';
  }

}
