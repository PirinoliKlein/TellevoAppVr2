import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrcameraPage } from './qrcamera.page';

const routes: Routes = [
  {
    path: '',
    component: QrcameraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrcameraPageRoutingModule {}
