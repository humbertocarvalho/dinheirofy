import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletsComponent } from './wallets.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewComponent } from './new/new.component';
import { LoginGuard } from '../core/auth/login.guard';

const routes: Routes = [
  {
    path: 'wallets',
    component: WalletsComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          title: 'Wallet Dashboard'
        }
      },
      {
        path: 'new',
        component: NewComponent,
        data: {
          title: 'New Wallet'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletsRoutingModule { }
