import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { StaffWorkLogComponent } from './staff-work-log/staff-work-log.component';
import { BaseComponent } from './base/base.component';
import { StaffConfigComponent } from './staff-config/staff-config.component';



const routes: Routes = [
  {
    path: '',
    // component: LayoutComponent,
    // component: StaffWorkLogComponent,
    // children: [
    //   {
    //     path: 'staffWorkLog',
    //     component: StaffWorkLogComponent
    //   },
    //   {
    //     path: 'staffConfig',
    //     component: StaffConfigComponent
    //   }
    // ],
  },
  {
    path: 'staffWorkLog',
    component: StaffWorkLogComponent
  },
  {
    path: 'staffConfig',
    component: StaffConfigComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    BaseComponent,
    StaffWorkLogComponent,
    StaffConfigComponent
  ]
})
export class StaffSystemModule { }
