import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { TimeTableService } from '../../../services/time-table.service';
import { Period } from '@eden-apps/period';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'eden-apps-update-period',
  templateUrl: './update-period.component.html',
  styleUrls: ['./update-period.component.scss']
})
export class UpdatePeriodComponent implements OnInit {
  period: Period;
  updatePeriodForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private tt: TimeTableService,
    private fb: FormBuilder
  ) {
    this.updatePeriodForm = this.fb.group({
      time: '',
      day: '',
    });
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap(p => this.tt.getPeriod(p.get('id'))))
      .subscribe(p => {
        this.updatePeriodForm.patchValue({
          time: p.time,
          day: p.day
        });
        this.period = p;
      });
  }

  save() {
    console.log(this.updatePeriodForm.value);
  }

  get time() {
    return this.updatePeriodForm.get('time');
  }

  get day() {
    return this.updatePeriodForm.get('day');
  }
}
