import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffLoginComponent } from './staff-login.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [StaffLoginComponent],
  exports: [
    StaffLoginComponent
  ]
})
export class StaffLoginModule { }
