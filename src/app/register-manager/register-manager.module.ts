import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterManagerPageRoutingModule } from './register-manager-routing.module';

import { RegisterManagerPage } from './register-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterManagerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterManagerPage]
})
export class RegisterManagerPageModule {}
