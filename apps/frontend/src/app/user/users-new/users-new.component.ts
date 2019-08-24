import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { confirmPassword } from '../../_helpers/directives/confirm-password';
import { contactsLength } from '../../_helpers/directives/contacts-length';

@Component({
  selector: 'eden-apps-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.scss']
})
export class UsersNewComponent implements OnInit {
  userform: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userform = this.fb.group(
      {
        name: ['', Validators.required],
        email: '',
        contacts: this.fb.array([]),
        password: '',
        confirmPassword: ''
      },
      { validators: [confirmPassword, contactsLength] }
    );
  }

  get contacts() {
    return this.userform.get('contacts') as FormArray;
  }

  get fc() {
    return this.userform.controls;
  }

  get n() {
    return this.userform.get('name');
  }

  get p() {
    return this.userform.get('password');
  }

  get e() {
    return this.userform.get('email');
  }

  get cp() {
    return this.userform.get('confirmPassword');
  }

  ngOnInit() {}

  save() {
    if (this.userform.invalid) {
      this.userform.markAsDirty();
      return;
    }
    this.userService
      .createUser(this.userform.value)
      .subscribe(u => {
        this.router.navigate(['users', u._id]);
      });
  }

  addControl() {
    this.contacts.push(
      this.fb.control('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ])
    );
  }

  removeContact(i) {
    this.contacts.removeAt(i);
  }
}
