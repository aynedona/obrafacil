import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterManagerPage } from './register-manager.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterManagerPageRoutingModule {}
