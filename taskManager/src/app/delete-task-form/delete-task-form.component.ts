import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TaskDetail } from './../models/task-detail';
import { RestApiCallsDataService } from './../service/rest-api-calls-data.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-delete-task-form',
  templateUrl: './delete-task-form.component.html',
  styleUrls: ['./delete-task-form.component.css']
})
export class DeleteTaskFormComponent implements OnInit {
  SelectTask: string;

  @Output() submitDone = new EventEmitter();

  constructor(
    public restApiCallsDataService: RestApiCallsDataService,
    public spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.SelectTask = 'Select the task';
  }

  deleteTask() {
    console.log('deleteTask');
    this.submitDone.emit(this.SelectTask);
    this.SelectTask = 'Select the task';
  }

}
