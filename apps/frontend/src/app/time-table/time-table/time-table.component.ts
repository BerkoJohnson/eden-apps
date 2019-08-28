import { Component, OnInit } from '@angular/core';
import { TimeTableService, Schedules } from '../../services/time-table.service';
import { Period } from '@eden-apps/period';

@Component({
  selector: 'eden-apps-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {
  days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  schedules: Schedules;

  times = ['3:00pm - 4:30pm', '4:30pm - 6:00pm'];
  
  constructor(private tt: TimeTableService) {}

  ngOnInit() {
    this.tt.time_schedules().subscribe(ts => {
      this.schedules = ts;
      
    });
  }
}
