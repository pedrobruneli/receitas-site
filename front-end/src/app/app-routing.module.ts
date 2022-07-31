import { LoginRoutingModule } from './pages/login/login-routing.module';
import { HomeRoutingModule } from './pages/home/home-routing.module';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home-routing.module').then(
        (m) => m.HomeRoutingModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login-routing.module').then(
        (m) => m.LoginRoutingModule
      ),
  },
  {
    path: 'create-receita',
    loadChildren: () =>
      import('./pages/create-receita/create-receita-routing.module').then(
        (m) => m.CreateReceitaRoutingModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
