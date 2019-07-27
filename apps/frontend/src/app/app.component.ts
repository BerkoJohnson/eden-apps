import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'eden-apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontApp';
  thisRoute = '';
  constructor(
    public auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {
    // console.log(this.route.url.subscribe(l => console.log(l)));
  }
}
