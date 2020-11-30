import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByValue'
})
export class SortByValuePipe implements PipeTransform {

  resultArray;
  transform(value: any, sortValue: any): any {
    this.resultArray = [];
    if (sortValue === 'date') {
      return value.sort(function(element1: any, element2: any) {
        return  +new Date(element2.due_date) - +new Date(element1.due_date);
      });
    } else if (sortValue === 'priority') {
      return value.sort(function(element1: any, element2: any) {
        return  element2.priority - element1.priority;
      });
    } else {
      return value;
    }
  }

}
