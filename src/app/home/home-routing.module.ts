import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountCreatedComponent } from './account-created/account-created.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'account-created', component: AccountCreatedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
