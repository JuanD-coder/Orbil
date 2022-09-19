import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibrosCategoriaPageRoutingModule } from './libros-categoria-routing.module';

import { LibrosCategoriaPage } from './libros-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibrosCategoriaPageRoutingModule
  ],
  declarations: [LibrosCategoriaPage]
})
export class LibrosCategoriaPageModule {}
