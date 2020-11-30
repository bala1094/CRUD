import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

import { TaskDetail } from './../models/task-detail';
import { RestApiCallsDataService } from './../service/rest-api-calls-data.service';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.css']
})
export class CreateTaskFormComponent implements OnInit {

  @Output() submitDone = new EventEmitter<TaskDetail>();
  datePickerConfig: Partial<BsDatepickerConfig>; // partial is used because only container property alone is modified
  submitted: boolean;
  taskDetails = {
    message: null,
    assigned_name : null,
    priority: null,
    dueDate: null
  };
  constructor(
    public restApiCallsDataService: RestApiCallsDataService,
  ) {
    this.datePickerConfig = Object.assign({}, {containerClass : 'theme-dark-blue'}); // copies the enumurated src property
   }

  ngOnInit() {
    this.submitted = false;
  }

  createNewTask(taskDetails) {
    this.submitDone.emit(taskDetails);
    this.submitted = true;
  }
  closeLogAlert() {
    this.taskDetails = {
      message: ' ',
      assigned_name : '',
      priority: null,
      dueDate: ''
    };
    this.submitted = false;
  }
}
