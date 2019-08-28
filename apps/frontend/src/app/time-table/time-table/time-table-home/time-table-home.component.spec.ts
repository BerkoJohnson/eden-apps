import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTableHomeComponent } from './time-table-home.component';

describe('TimeTableHomeComponent', () => {
  let component: TimeTableHomeComponent;
  let fixture: ComponentFixture<TimeTableHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTableHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
