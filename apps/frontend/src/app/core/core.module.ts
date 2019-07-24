import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SummaryComponent} from './dashboard/summary/summary.component';
import {SchedulesComponent} from './dashboard/schedules/schedules.component';
import {AppRoutingModule} from '../app-routing.module';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    SummaryComponent,
    SchedulesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [AppRoutingModule]
})
export class CoreModule {
}
