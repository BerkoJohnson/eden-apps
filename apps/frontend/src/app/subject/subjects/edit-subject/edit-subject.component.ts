import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../services/subject.service';

@Component({
  selector: 'eden-apps-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.scss']
})
export class EditSubjectComponent implements OnInit {

  constructor(
    private subjectService: SubjectService
  ) { }

  ngOnInit() {
    console.log('Updating...');
  }

}
