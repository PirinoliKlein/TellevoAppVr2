import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbicacionChoferPageRoutingModule } from './ubicacion-chofer-routing.module';

import { UbicacionChoferPage } from './ubicacion-chofer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicacionChoferPageRoutingModule
  ],
  declarations: [UbicacionChoferPage]
})
export class UbicacionChoferPageModule {}
