import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibrosCategoriaPage } from './libros-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: LibrosCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibrosCategoriaPageRoutingModule {}
