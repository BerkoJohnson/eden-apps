import { Component, OnInit } from '@angular/core';
import { TimeTableService } from '../../../services/time-table.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Period } from '@eden-apps/period';

@Component({
  selector: 'eden-apps-delete-period',
  templateUrl: './delete-period.component.html',
  styleUrls: ['./delete-period.component.css']
})
export class DeletePeriodComponent implements OnInit {
  period: Period;
  constructor(
    private tt: TimeTableService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(v => {
        return this.tt.getPeriod(v.get('id'));
      })
    )
    .subscribe(p => {
      if(!p) return this.router.navigate(['time-table','periods'])
      this.period = p
    });
  }

  deletePeriod() {
    this.tt.deletePeriod(this.period._id).subscribe(
      res => {
        this.router.navigate(['time-table','periods']);
      }
    );
  }

}
