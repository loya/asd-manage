import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  submiting= false;
  loginForm: FormGroup;
  _submitForm() {
for (const i in this.loginForm.controls) {
  if (this.loginForm.controls.hasOwnProperty(i)) {
    const e = this.loginForm.controls[i];
    e.markAsDirty();
  }
}


  }
  constructor(public fb: FormBuilder) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      loginName: [null, [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

}
