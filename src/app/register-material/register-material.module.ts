import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterMaterialPageRoutingModule } from './register-material-routing.module';

import { RegisterMaterialPage } from './register-material.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterMaterialPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterMaterialPage]
})
export class RegisterMaterialPageModule {}
