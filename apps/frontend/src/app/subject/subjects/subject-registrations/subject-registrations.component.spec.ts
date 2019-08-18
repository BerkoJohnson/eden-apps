import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectRegistrationsComponent } from './subject-registrations.component';

describe('SubjectRegistrationsComponent', () => {
  let component: SubjectRegistrationsComponent;
  let fixture: ComponentFixture<SubjectRegistrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectRegistrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
