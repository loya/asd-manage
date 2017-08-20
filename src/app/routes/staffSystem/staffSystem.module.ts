import { NgModule } from '@angular/core';
import { LayoutComponent } from './pages/layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { StaffWorkLogComponent } from './pages/staff-work-log/staff-work-log.component';
import { BaseComponent } from './pages/base/base.component';
import { StaffConfigComponent } from './pages/staff-config/staff-config.component';
import { LayoutModule } from './pages/layout/layout.module';
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
