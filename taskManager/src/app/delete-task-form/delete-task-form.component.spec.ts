import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTaskFormComponent } from './delete-task-form.component';

describe('DeleteTaskFormComponent', () => {
  let component: DeleteTaskFormComponent;
  let fixture: ComponentFixture<DeleteTaskFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTaskFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
