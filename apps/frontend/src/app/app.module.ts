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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    UiModule,
    CoreModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
    AuthService,
    StudentService,
    MessageService,
    UserService,
    TeacherService,
    SubjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

