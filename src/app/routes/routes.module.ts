import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StaffSystemModule } from './staffSystem/staffSystem.module';
import { LayoutComponent } from './staffSystem/components/layout/layout.component';
import { LayoutModule } from './staffSystem/components/layout/layout.module';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StaffLoginModule } from './staff-login/staff-login.module';

const routes: Routes = [
  {
    path: '',
    children: [
        {
          path: 'staffSystem', loadChildren: './staffSystem/staffSystem.module#StaffSystemModule',
           component: LayoutComponent
      },
        {
          path: 'staffLogin',
        component: StaffLoginComponent
      }
    ]
   },
   // Not found
   { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [
    StaffLoginModule,
    LayoutModule,
    RouterModule.forRoot(routes)
],
  exports: [
    RouterModule
  ]
})
export class RoutesModule { }
