import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { TaskAllocationComponent } from './task-allocation/task-allocation.component';
import { CreateTaskFormComponent } from './create-task-form/create-task-form.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { UpdateTaskFormComponent } from './update-task-form/update-task-form.component';
import { RestApiCallsDataService } from './service/rest-api-calls-data.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RemoveUserPipe } from './pipes/remove-user/remove-user.pipe';
import { DeleteTaskFormComponent } from './delete-task-form/delete-task-form.component';
import { TaskSummaryComponent } from './task-summary/task-summary.component';
import { TaskSearchComponent } from './task-search/task-search.component';
import { SearchByTaskPipe } from './pipes/seach-by-task/search-by-task.pipe';
import { ViewByComponent } from './view-by/view-by.component';
import { SortByValuePipe } from './pipes/sort-by-value/sort-by-value.pipe';
import { UpdatePriorityComponent } from './update-priority/update-priority.component';
import { DndModule } from 'ngx-drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    TaskAllocationComponent,
    CreateTaskFormComponent,
    UpdateTaskFormComponent,
    RemoveUserPipe,
    DeleteTaskFormComponent,
    TaskSummaryComponent,
    TaskSearchComponent,
    SearchByTaskPipe,
    ViewByComponent,
    SortByValuePipe,
    UpdatePriorityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    NgxSpinnerModule,
    DndModule
  ],
  providers: [RestApiCallsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
