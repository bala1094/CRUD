import { Component, OnInit } from '@angular/core';

import { RestApiCallsDataService } from './../service/rest-api-calls-data.service';

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.css']
})
export class TaskSearchComponent implements OnInit {
  searchText: string;
  constructor(public restApiCallsDataService: RestApiCallsDataService) { }

  ngOnInit() {
  }

  searching() {
    console.log('temp');
  }
}
