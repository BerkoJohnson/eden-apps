import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPeriodsComponent } from './list-of-periods.component';

describe('ListOfPeriodsComponent', () => {
  let component: ListOfPeriodsComponent;
  let fixture: ComponentFixture<ListOfPeriodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfPeriodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
