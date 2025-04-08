import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientProjectProgressPageRoutingModule } from './client-project-progress-routing.module';

import { ClientProjectProgressPage } from './client-project-progress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientProjectProgressPageRoutingModule
  ],
  declarations: [ClientProjectProgressPage]
})
export class ClientProjectProgressPageModule {}
