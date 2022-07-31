import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';

@NgModule({
  declarations: [AppComponent, CabecalhoComponent],
  imports: [
    BrowserModule,
    SwiperModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
