import { Component, OnInit } from '@angular/core';
import { RestApiCallsDataService } from './../service/rest-api-calls-data.service';

@Component({
  selector: 'app-view-by',
  templateUrl: './view-by.component.html',
  styleUrls: ['./view-by.component.css']
})
export class ViewByComponent implements OnInit {
  sortValue: string;
  constructor(
    private restApiCallsDataService: RestApiCallsDataService
  ) { }

  ngOnInit(
  ) {
    this.sortValue = 'none';
  }

  sortBy(value) {
    this.sortValue = value;
  }

}
