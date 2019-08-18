import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePeriodComponent } from './delete-period.component';

describe('DeletePeriodComponent', () => {
  let component: DeletePeriodComponent;
  let fixture: ComponentFixture<DeletePeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
