import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDeEntradaPageRoutingModule } from './registro-de-entrada-routing.module';

import { RegistroDeEntradaPage } from './registro-de-entrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroDeEntradaPageRoutingModule
  ],
  declarations: [RegistroDeEntradaPage]
})
export class RegistroDeEntradaPageModule {}
