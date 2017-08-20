import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  submiting = false;
  loginForm: FormGroup;
  loginInfos: Array<any>;
  currentLoginInfo: any;
  constructor(public fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginInfos = JSON.parse(localStorage.getItem('loginInfos'));

    this.currentLoginInfo = this.loginInfos ? this.loginInfos[this.loginInfos.length - 1] : [{loginName: null, password: null}];
    this.loginForm = this.fb.group({
      loginName: [this.loginInfos ? this.currentLoginInfo.loginName : null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  submitForm(value: string) {
    for (const i in this.loginForm.controls) {
      if (this.loginForm.controls.hasOwnProperty(i)) {
        const e = this.loginForm.controls[i];
        e.markAsDirty();
      }
    }
    if (this.loginForm.valid) {
      console.log(value);
      if (!this.loginInfos) {
        this.loginInfos = [];
        // this.loginInfos.infos = [];
      }
      this.loginInfos.push(value);
      localStorage.setItem('loginInfos', JSON.stringify(this.loginInfos));

    }
  }

  getLoginInfo() {

    // alert(localStorage.getItem('loginInfos'));
    console.log(localStorage.getItem('loginInfos'));


  }
}
