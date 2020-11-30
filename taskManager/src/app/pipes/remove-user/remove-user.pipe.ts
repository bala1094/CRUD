import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeUser'
})
export class RemoveUserPipe implements PipeTransform {

  resultArray;
  transform(value: any, eleToBeRemoved: any): any {
    this.resultArray = [];
    value.forEach(element => {
      if (element.id !== eleToBeRemoved.assigned_to) {
        this.resultArray.push(element);
      }
    });
    return this.resultArray;
  }

}
