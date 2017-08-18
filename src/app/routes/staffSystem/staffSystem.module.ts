import { NgModule } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { StaffWorkLogComponent } from './components/staff-work-log/staff-work-log.component';
import { BaseComponent } from './components/base/base.component';
import { StaffConfigComponent } from './components/staff-config/staff-config.component';
import { LayoutModule } from './components/layout/layout.module';
import { StaffService } from './services/staff.service';



const routes: Routes = [
   {
    path: '',
    // redirectTo: 'staffWorkLog'
    component: StaffWorkLogComponent
  //    component: LayoutComponent,
  //   // component: StaffWorkLogComponent,
  //   children: [
  //     {
  //       path: 'staffWorkLog',
  //       component: StaffWorkLogComponent
  //     },
  //     {
  //       path: 'staffConfig',
  //       component: StaffConfigComponent
  //     }
  //   ],
   },
  {
    path: 'staffWorkLog',
    component: StaffWorkLogComponent
  },
  {
    path: 'staffConfig',
    component: StaffConfigComponent
  },
];

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    BaseComponent,
    StaffWorkLogComponent,
    StaffConfigComponent,
  ],
  providers: [
    StaffService
  ]
})
export class StaffSystemModule { }
