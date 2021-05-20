import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuntoDeEntradaPageRoutingModule } from './punto-de-entrada-routing.module';

import { PuntoDeEntradaPage } from './punto-de-entrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuntoDeEntradaPageRoutingModule
  ],
  declarations: [PuntoDeEntradaPage]
})
export class PuntoDeEntradaPageModule {}
