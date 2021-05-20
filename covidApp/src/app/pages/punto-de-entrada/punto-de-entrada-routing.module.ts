import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuntoDeEntradaPage } from './punto-de-entrada.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDeEntradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuntoDeEntradaPageRoutingModule {}
