import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrcameraPageRoutingModule } from './qrcamera-routing.module';

import { QrcameraPage } from './qrcamera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrcameraPageRoutingModule
  ],
  declarations: [QrcameraPage]
})
export class QrcameraPageModule {}
