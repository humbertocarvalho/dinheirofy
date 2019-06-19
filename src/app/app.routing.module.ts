import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AuthGuard } from './core/auth/auth.guard';
import { GlobalErrorComponent } from './errors/global-error/global-error.component';
import { WalletsComponent } from './wallets/wallets.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'wallets',
    component: WalletsComponent
  },
  {
    path: 'error',
    component: GlobalErrorComponent,
    data: {
      title: 'Error'
    }
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'Not found'
    }
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
