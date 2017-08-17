import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { StaffWorkLogComponent } from './staff-work-log/staff-work-log.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'staffWorkLog',
        component: StaffWorkLogComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule, LayoutModule
  ],
  declarations: [
    StaffWorkLogComponent
]
})
export class StaffSystemModule { }
