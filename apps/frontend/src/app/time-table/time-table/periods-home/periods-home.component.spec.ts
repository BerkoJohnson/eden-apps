import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodsHomeComponent } from './periods-home.component';

describe('PeriodsHomeComponent', () => {
  let component: PeriodsHomeComponent;
  let fixture: ComponentFixture<PeriodsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
