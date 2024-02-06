import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AccountCreatedComponent } from './account-created/account-created.component';


@NgModule({
  declarations: [
    HomeComponent,
    AccountCreatedComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
