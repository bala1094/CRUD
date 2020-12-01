import { Component, OnInit } from '@angular/core';

import { DndDropEvent } from 'ngx-drag-drop';

import { RestApiCallsDataService } from './../service/rest-api-calls-data.service';
@Component({
  selector: 'app-update-priority',
  templateUrl: './update-priority.component.html',
  styleUrls: ['./update-priority.component.css']
})
export class UpdatePriorityComponent implements OnInit {

  constructor(
    public restApiCallsDataService: RestApiCallsDataService,
  ) { }

  ngOnInit() {
  }

  onDrop1(event) {
    const recivedData = event.data;
    if (recivedData.priority !== 1) {
      const sendData = {
        message : recivedData.message,
        due_date: recivedData.due_date,
        priority: 1,
        assigned_to: recivedData.assigned_to,
        taskid: recivedData.id
      };
      this.restApiCallsDataService.updateTask(sendData, () => {
        this.restApiCallsDataService.getTasks();
      });
    }
  }
  onDrop2(event) {
    const recivedData = event.data;
    if (recivedData.priority !== 2) {
      const sendData = {
        message : recivedData.message,
        due_date: recivedData.due_date,
        priority: 2,
        assigned_to: recivedData.assigned_to,
        taskid: recivedData.id
      };
      this.restApiCallsDataService.updateTask(sendData, () => {
        this.restApiCallsDataService.getTasks();
      });
    }
  }
  onDrop3(event) {
    const recivedData = event.data;
    if (recivedData.priority !== 3) {
      const sendData = {
        message : recivedData.message,
        due_date: recivedData.due_date,
        priority: 3,
        assigned_to: recivedData.assigned_to,
        taskid: recivedData.id
      };
      this.restApiCallsDataService.updateTask(sendData, () => {
        this.restApiCallsDataService.getTasks();
      });
    }
  }

}
