import { CreateReceitaComponent } from './create-receita.component';
import { CreateReceitaModule } from './create-receita.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CreateReceitaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), CreateReceitaModule],
  exports: [RouterModule],
})
export class CreateReceitaRoutingModule {}
