import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarUserPageRoutingModule } from './editar-user-routing.module';

import { EditUserPage } from './editar-user.page';
import { Router } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarUserPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditUserPage]
})
export class EditarUserPageModule {}
