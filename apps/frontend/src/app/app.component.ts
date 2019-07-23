import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'eden-apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontApp';
constructor(public auth: AuthService) {}

}
