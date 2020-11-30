import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-summary',
  templateUrl: './task-summary.component.html',
  styleUrls: ['./task-summary.component.css']
})
export class TaskSummaryComponent implements OnInit {

  viewSelected: string;

  constructor() { }

  ngOnInit() {
    this.viewSelected = 'search';
  }
  openSummary(view) {
    this.viewSelected = view;
  }
}
