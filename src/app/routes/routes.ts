import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

export const routes: Routes = [
  {
    path: '',
    children: [
        {
          path: 'staffSystem', loadChildren: './staffSystem/staffSystem.module#StaffSystemModule'
        }
    ]
   },
   // Not found
   { path: '**', redirectTo: 'dashboard' }
];
