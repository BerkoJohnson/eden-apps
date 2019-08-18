import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'eden-apps-subject-registrations',
  templateUrl: './subject-registrations.component.html',
  styleUrls: ['./subject-registrations.component.scss']
})
export class SubjectRegistrationsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(r => r.get('id'))
    )
    .subscribe(v => console.log(v));
  }

}
