import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'ambiente',
    loadChildren: () => import('./paginas/ambiente/ambiente.module').then( m => m.AmbientePageModule)
  },
  {
    path: 'computador',
    loadChildren: () => import('./paginas/computador/computador.module').then( m => m.ComputadorPageModule)
  },
  {
    path: 'proyector',
    loadChildren: () => import('./paginas/proyector/proyector.module').then( m => m.ProyectorPageModule)
  },
  {
    path: 'libros',
    loadChildren: () => import('./paginas/libros/libros.module').then( m => m.LibrosPageModule)
  },
  {
    path: 'reserva-detalle',
    loadChildren: () => import('./paginas/detalleLibro/reserva-detalle.module').then( m => m.ReservaDetallePageModule)
  },
  {
    path: 'libros-categoria',
    loadChildren: () => import('./paginas/libros-categorias/libros-categoria.module').then( m => m.LibrosCategoriaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
