import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

import { TaskDetail } from './../models/task-detail';
import { RestApiCallsDataService } from './../service/rest-api-calls-data.service';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.css']
})
export class CreateTaskFormComponent implements OnInit {

  @Output() submitDone = new EventEmitter<TaskDetail>();
  datePickerConfig: Partial<BsDatepickerConfig>; // partial is used because only container property alone is modified
  submitted: boolean;
  messageExist: boolean;
  taskDetails = {
    message: null,
    assigned_name : null,
    priority: null,
    dueDate: null
  };
  taskDetailFormGroup: FormGroup;

  constructor(
    public restApiCallsDataService: RestApiCallsDataService,
    private fb: FormBuilder
  ) {
    this.createForm();
    const date = new Date();
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
    this.datePickerConfig = Object.assign({}, {containerClass : 'theme-dark-blue', minDate: today}); // copies the enumurated src property
    this.messageExist = false;
  }

   createForm() {
    this.taskDetailFormGroup = this.fb.group({
      message: ['', Validators.required ],
      assigned_name : null,
      priority: null,
      dueDate: '',
    });
   }
  ngOnInit() {
    this.submitted = false;
  }

  createNewTask() {
    // console.log(this.taskDetailFormGroup.value);
    this.submitDone.emit(this.taskDetailFormGroup.value);
    this.taskDetailFormGroup.reset({
      message: '',
      assigned_name : null,
      priority: null,
      dueDate: '',
    });
    this.submitted = true;
  }
  checkInputMessage() {
    let tempArray;
    tempArray = this.restApiCallsDataService.tasks.find(element => {
      return element.message.toLowerCase() === this.taskDetailFormGroup.value.message.toLowerCase();
     });
    if (tempArray) {
      this.messageExist = true;
    }
  }
  clearCheckInputMessage() {
    this.messageExist = false;
  }
  closeLogAlert() {
    this.submitted = false;
    this.restApiCallsDataService.taskCreationSuccess = false;
  }
}
