import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'punto-de-entrada',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'punto-de-entrada',
    loadChildren: () => import('./pages/punto-de-entrada/punto-de-entrada.module').then( m => m.PuntoDeEntradaPageModule)
  },
  {
    path: 'registro-de-entrada',
    loadChildren: () => import('./pages/registro-de-entrada/registro-de-entrada.module').then( m => m.RegistroDeEntradaPageModule)
  },
  {
    path: 'scaner',
    loadChildren: () => import('./pages/scaner/scaner.module').then( m => m.ScanerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
