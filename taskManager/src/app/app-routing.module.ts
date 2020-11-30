import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TaskAllocationComponent } from './task-allocation/task-allocation.component';
import { TaskSummaryComponent } from './task-summary/task-summary.component';

const routes = [
  { path: 'taskAllocation', component: TaskAllocationComponent, },
  { path: 'taskSummary', component: TaskSummaryComponent, },

  { path: '', redirectTo: '/taskAllocation', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
