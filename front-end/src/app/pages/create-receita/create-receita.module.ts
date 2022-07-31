import { FormsModule } from '@angular/forms';
import { CreateReceitaComponent } from './create-receita.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CreateReceitaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CreateReceitaModule { }
