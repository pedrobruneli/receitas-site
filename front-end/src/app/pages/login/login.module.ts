import { LoginComponent } from './login.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    LoginScreenComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginModule { }
