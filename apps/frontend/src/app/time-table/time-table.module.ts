import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTableComponent } from './time-table/time-table.component';
import { TimeTableRoutingModule } from './time-table-routing.module';
import { PeriodsComponent } from './time-table/periods/periods.component';
import { TimeTableHomeComponent } from './time-table/time-table-home/time-table-home.component';
import { ListOfPeriodsComponent } from './time-table/list-of-periods/list-of-periods.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewPeriodComponent } from './time-table/view-period/view-period.component';
import { UpdatePeriodComponent } from './time-table/update-period/update-period.component';
import { DeletePeriodComponent } from './time-table/delete-period/delete-period.component';
import { PeriodsHomeComponent } from './time-table/periods-home/periods-home.component';

@NgModule({
  declarations: [
    TimeTableComponent,
    PeriodsComponent,
    TimeTableHomeComponent,
    ListOfPeriodsComponent,
    ViewPeriodComponent,
    UpdatePeriodComponent,
    DeletePeriodComponent,
    PeriodsHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TimeTableRoutingModule
  ]
})
export class TimeTableModule {}
