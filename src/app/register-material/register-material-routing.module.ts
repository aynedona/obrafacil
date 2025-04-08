import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterMaterialPage } from './register-material.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterMaterialPageRoutingModule {}
