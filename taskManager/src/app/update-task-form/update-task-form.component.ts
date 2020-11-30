import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

import { TaskDetail } from './../models/task-detail';
import { RestApiCallsDataService } from './../service/rest-api-calls-data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-update-task-form',
  templateUrl: './update-task-form.component.html',
  styleUrls: ['./update-task-form.component.css']
})
export class UpdateTaskFormComponent implements OnInit {

  @Output() submitDone = new EventEmitter<TaskDetail>();
  datePickerConfig: Partial<BsDatepickerConfig>; // partial is used because only container property alone is modified
  users: string[];
  submitted: boolean;
  taskDetail: TaskDetail = {
    assigned_name: null,
    assigned_to: null,
    created_on: null,
    due_date: null,
    id: null,
    message: null,
    priority: null,
  };
  enableTaskEditor = false;
  SelectTask: String;

  constructor(
    private restApiCallsDataService: RestApiCallsDataService,
    private spinner: NgxSpinnerService,
  ) {
    this.datePickerConfig = Object.assign({}, {containerClass : 'theme-dark-blue'}); // copies the enumurated src property
   }


  ngOnInit() {
    this.SelectTask = 'Select the Option';
    this.submitted = false;
  }

  updateTask(taskDetails) {
    console.log(taskDetails);
    this.submitDone.emit(taskDetails);
    this.enableTaskEditor = false;
    this.submitted = true;
    this.SelectTask = 'Select the Option';
  }

  taskSelected() {
    console.log(this.taskDetail.message);
    if (this.SelectTask === 'Select the Option') {
      this.enableTaskEditor = false;
    } else {
      console.log(this.restApiCallsDataService.users);
      this.taskDetail =  this.restApiCallsDataService.tasks.find(element => {
        if (element.message.toLowerCase() === this.SelectTask.toLowerCase()) {
          this.enableTaskEditor = true;
          return true;
        } else {
          this.enableTaskEditor = false;
          return false;
        }
      });
    }

    this.taskDetail.due_date = new Date(this.taskDetail.due_date);
  }
  closeLogAlert() {
    this.submitted = false;
  }
}
