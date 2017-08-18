import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StaffSystemModule } from './staffSystem/staffSystem.module';
import { LayoutComponent } from './staffSystem/layout/layout.component';
import { LayoutModule } from './staffSystem/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    children: [
        {
          path: 'staffSystem', loadChildren: './staffSystem/staffSystem.module#StaffSystemModule',
          component: LayoutComponent
        }
    ]
   },
   // Not found
   { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forRoot(routes)
],
  exports: [
    RouterModule
  ]
})
export class RoutesModule { }
