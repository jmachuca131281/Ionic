import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroDeEntradaPage } from './registro-de-entrada.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroDeEntradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroDeEntradaPageRoutingModule {}
