import { NgModule } from '@angular/core';
import { LoginModule } from './login.module';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';


const routes: Routes = [
  {path: '', component: LoginComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    LoginModule
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
