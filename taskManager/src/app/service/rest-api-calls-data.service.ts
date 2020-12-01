import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

const baseUrl = 'https://devza.com/tests/tasks/';
const headers_object = new HttpHeaders().set('AuthToken', 'o4VYZ1RNrtHki3ysMeV4YAvc48X9xVTH');

const httpOptions = {
  headers: headers_object
};

@Injectable()
export class RestApiCallsDataService {
 users;
 tasks;
 taskFetchCompleted: boolean;
 userFetchCompleted: boolean;
 taskCreationSuccess: boolean;
 taskUpdateSuccess: boolean;
 taskDeletionSuccess: boolean;
  constructor(
    private http: HttpClient,
    public spinner: NgxSpinnerService,
  ) {
    this.taskFetchCompleted = false;
    this.userFetchCompleted = false;
    this.getUsers();
    this.getTasks();
  }
  getTasks() {
    this.spinner.show();
    this.taskFetchCompleted = false;
    this.http.get(`${baseUrl}list`, httpOptions ).subscribe((res) => {
      const temp: any = res;
      this.tasks = temp.tasks;
      this.taskFetchCompleted = true;
      this.spinner.hide();
    });
  }
  getUsers() {
    this.spinner.show();
    this.userFetchCompleted = false;
    this.http.get(`${baseUrl}listusers`, httpOptions ).subscribe((res) => {
      const temp: any = res;
      this.users = temp.users;
      this.userFetchCompleted = true;
      this.spinner.hide();
    });
  }
  createTask(formValue, callBack) {
    const data = new FormData();
    data.append('message', formValue.message );
    data.append('due_date', formValue.due_date);
    data.append('priority', formValue.priority);
    data.append('assigned_to', formValue.assigned_to);
    this.http.post(`${baseUrl}create`, data, httpOptions).subscribe(res => {
      const status: any = res;
      if (status.status === 'error') {
        this.taskCreationSuccess = false;
        this.spinner.hide();
      } else {
        this.taskCreationSuccess = true;
        callBack();
      }
    });
  }
  updateTask(formValue, callBack) {
    const data = new FormData();
    data.append('message', formValue.message );
    data.append('due_date', formValue.due_date);
    data.append('priority', formValue.priority);
    data.append('assigned_to', formValue.assigned_to);
    data.append('taskid', formValue.taskid);
    this.http.post(`${baseUrl}update`, data, httpOptions).subscribe(res => {
      const status: any = res;
      if (status.status === 'error') {
        this.taskUpdateSuccess = false;
        this.spinner.hide();
      } else {
        this.taskUpdateSuccess = true;
        callBack();
      }
    });

  }
  deleteTask(id, callBack) {
    const data = new FormData();
    data.append('taskid', id );
    this.http.post(`${baseUrl}delete`, data , httpOptions).subscribe(res => {
      const status: any = res;
      if (status.status === 'error') {
        this.taskDeletionSuccess = false;
        this.spinner.hide();
      } else {
        this.taskDeletionSuccess = true;
        callBack();
      }
    });
  }
}
