import { NgModule } from '@angular/core';
import { HomeModule } from './home.module';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';


const routes: Routes = [
  {path: '', component: HomeComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    HomeModule
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
