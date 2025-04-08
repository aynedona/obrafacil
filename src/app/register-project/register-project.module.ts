import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterProjectPageRoutingModule } from './register-project-routing.module';

import { RegisterProjectPage } from './register-project.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterProjectPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterProjectPage]
})
export class RegisterProjectPageModule {}
