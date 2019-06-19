import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NewComponent } from './new/new.component';
import { WalletsRoutingModule } from './wallets.routing.module';
import { WalletsComponent } from './wallets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, VMessageModule, RouterModule, WalletsRoutingModule],
  declarations: [WalletsComponent, DashboardComponent, NewComponent],
  exports: [DashboardComponent, NewComponent, WalletsRoutingModule]
})
export class WalletsModule { }
