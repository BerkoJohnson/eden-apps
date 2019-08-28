import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { CoreModule } from './core/core.module';
import { JWTInterceptor } from './_helpers/interceptors/jwt.interceptor';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { StudentService } from './services/student.service';
import { UserService } from './services/user.service';
import { TeacherService } from './services/teacher.service';
import { SubjectService } from './services/subject.service';
import { MessageService } from './services/message.service';
import { EdenUiModule } from '@eden-apps/eden-ui';
import { LayoutComponent } from './layout/layout.component';
import { TimeTableService } from './services/time-table.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    UiModule,
    CoreModule,
    EdenUiModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    },
    AuthService,
    StudentService,
    MessageService,
    UserService,
    TeacherService,
    SubjectService,
    TimeTableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

