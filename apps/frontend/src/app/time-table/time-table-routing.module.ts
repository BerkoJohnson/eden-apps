import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeTableComponent } from './time-table/time-table.component';
import { PeriodsComponent } from './time-table/periods/periods.component';
import { TimeTableHomeComponent } from './time-table/time-table-home/time-table-home.component';
import { ViewPeriodComponent } from './time-table/view-period/view-period.component';
import { UpdatePeriodComponent } from './time-table/update-period/update-period.component';
import { DeletePeriodComponent } from './time-table/delete-period/delete-period.component';
import { PeriodsHomeComponent } from './time-table/periods-home/periods-home.component';

const timeTableRoutes: Routes = [
  {
    path: '',
    component: TimeTableComponent,
    children: [
      { path: '', component: TimeTableHomeComponent },
      { path: 'periods', component: PeriodsComponent, children: [
        {path:'', component: PeriodsHomeComponent},
        {path: ':id', children: [
          {path: '', component: ViewPeriodComponent},
          {path: 'update', component: UpdatePeriodComponent},
          {path: 'delete', component: DeletePeriodComponent},
        ]},
      ] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(timeTableRoutes)],
  exports: [RouterModule]
})
export class TimeTableRoutingModule {}
