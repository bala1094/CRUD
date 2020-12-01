import { Component, OnInit } from '@angular/core';

import { RestApiCallsDataService } from './../service/rest-api-calls-data.service';

@Component({
  selector: 'app-task-allocation',
  templateUrl: './task-allocation.component.html',
  styleUrls: ['./task-allocation.component.css']
})
export class TaskAllocationComponent implements OnInit {

  formSelected: string;
  constructor(
    public restApiCallsDataService: RestApiCallsDataService,
  ) { }

  ngOnInit() {
    this.formSelected = 'createTask';
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
    this.restApiCallsDataService.spinner.show();
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
    this.restApiCallsDataService.createTask(sendData, () => {
      this.restApiCallsDataService.getTasks();
    });
  }

  updateTask(formData) {
    this.restApiCallsDataService.spinner.show();
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
    });
  }

  deleteTask (taskName) {
    this.restApiCallsDataService.spinner.show();
    const taskToBeDeleted = this.restApiCallsDataService.tasks.find( element => {
      return element.message === taskName;
    });
    this.restApiCallsDataService.deleteTask(taskToBeDeleted.id,  () => {
      this.restApiCallsDataService.getTasks();
    } );
  }

  formatDate(date) {
    if (date) {
      return (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' 00:00:00');
    } else {
      return null;
    }
  }
}
