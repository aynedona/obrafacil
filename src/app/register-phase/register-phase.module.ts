import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPhasePageRoutingModule } from './register-phase-routing.module';

import { RegisterPhasePage } from './register-phase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPhasePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterPhasePage]
})
export class RegisterPhasePageModule {}
