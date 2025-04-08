import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientProjectProgressPage } from './client-project-progress.page';

const routes: Routes = [
  {
    path: '',
    component: ClientProjectProgressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientProjectProgressPageRoutingModule {}
