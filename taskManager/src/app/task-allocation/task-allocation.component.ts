import { Component, OnInit } from '@angular/core';

import { RestApiCallsDataService } from './../service/rest-api-calls-data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-task-allocation',
  templateUrl: './task-allocation.component.html',
  styleUrls: ['./task-allocation.component.css']
})
export class TaskAllocationComponent implements OnInit {

  processCompleted: boolean;
  formSelected: string;
  constructor(
    private restApiCallsDataService: RestApiCallsDataService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.formSelected = 'createTask';
    this.processCompleted = false;
  }

  openForm(formType) {
    switch (formType) {
      case 'createTask': {
        this.formSelected = 'createTask';
        break;
      }
      case 'updateTask': {
        this.formSelected = 'updateTask';
        break;
      }
      case 'deleteTask': {
        this.formSelected = 'deleteTask';
        break;
      }
      // handling typo case
      default : {
        this.formSelected = 'createTask';
        break;
      }
    }
  }

  createTask(formData) {
    this.spinner.show();
    let tempUser;
    if (formData.assigned_name) {
      tempUser = this.restApiCallsDataService.users.find( element => {
        return element.name === formData.assigned_name;
      });
    } else {
      tempUser = {
        name : null,
        id : null
      };
    }
    const sendData = {
      message : formData.message,
      due_date: this.formatDate(formData.dueDate),
      priority: formData.priority,
      assigned_to: tempUser.id
    };
    console.log(sendData);
    this.restApiCallsDataService.createTask(sendData, () => {
      this.restApiCallsDataService.getTasks();
      this.processCompleted = true;
    });
  }

  updateTask(formData) {
    this.spinner.show();
    let tempUser;
    if (formData.assigned_name) {
      tempUser = this.restApiCallsDataService.users.find( element => {
        return element.name === formData.assigned_name;
      });
    }

    const sendData = {
      message : formData.message,
      due_date: this.formatDate(formData.due_date),
      priority: formData.priority,
      assigned_to: tempUser.id,
      taskid: formData.id
    };
    this.restApiCallsDataService.updateTask(sendData, () => {
      this.restApiCallsDataService.getTasks();
      this.processCompleted = true;
    });
  }

  deleteTask (taskName) {
    const taskToBeDeleted = this.restApiCallsDataService.tasks.find( element => {
      return element.message === taskName;
    });
    this.restApiCallsDataService.deleteTask(taskToBeDeleted.id);
  }

  formatDate(date) {
    if (date) {
      console.log(new Date(date));
      return (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' 00:00:00');
    } else {
      return null;
    }
  }
}
