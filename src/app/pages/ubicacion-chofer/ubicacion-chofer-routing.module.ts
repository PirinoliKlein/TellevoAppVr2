import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbicacionChoferPage } from './ubicacion-chofer.page';

const routes: Routes = [
  {
    path: '',
    component: UbicacionChoferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbicacionChoferPageRoutingModule {}
