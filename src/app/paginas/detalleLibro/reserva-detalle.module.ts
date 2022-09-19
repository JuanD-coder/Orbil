import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaDetallePageRoutingModule } from './reserva-detalle-routing.module';

import { ReservaDetallePage } from './reserva-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaDetallePageRoutingModule
  ],
  declarations: [ReservaDetallePage]
})
export class ReservaDetallePageModule {}
