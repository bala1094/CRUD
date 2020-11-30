import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByTask'
})
export class SearchByTaskPipe implements PipeTransform {

  resultArray = [];
  transform(value: any, searchElement?: any): any {
    this.resultArray = [];
    if (searchElement === '' || searchElement === undefined || searchElement === null) {
      return value;
    } else {
      value.forEach(element => {
        if (element.message.toLowerCase().includes(searchElement)) {
          this.resultArray.push(element);
        }
      });
      return this.resultArray;
      }
    }
}
