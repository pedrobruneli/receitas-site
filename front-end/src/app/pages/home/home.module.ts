import { SwiperModule } from 'swiper/angular';

import { HomeComponent } from './home.component';
import { ReceitaPoupupComponent } from './receita-poupup/receita-poupup.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { BannerComponent } from './banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [    BannerComponent,
    ReceitasComponent,
    QuemSomosComponent,
    ReceitaPoupupComponent,
    HomeComponent]
  ,
  imports: [
    CommonModule,
    SwiperModule
  ]
})
export class HomeModule { }
