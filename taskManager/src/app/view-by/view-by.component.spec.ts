import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByComponent } from './view-by.component';

describe('ViewByComponent', () => {
  let component: ViewByComponent;
  let fixture: ComponentFixture<ViewByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
