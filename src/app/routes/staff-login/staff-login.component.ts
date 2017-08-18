import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.loginForm = fb.group({
      loginName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  _submitForm() {

  }

}
