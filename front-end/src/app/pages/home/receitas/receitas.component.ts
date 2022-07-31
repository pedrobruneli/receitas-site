import { ReceitaPoupupComponent } from './../receita-poupup/receita-poupup.component';
import { ReceitaService } from '../../../services/receita-service.service';
import { IReceita } from '../../../models/receita.model'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {
  receitas: IReceita[][] = [];
  receita!: IReceita;
  public show = false;
  pages: any[] = [];
  i = 0;
  config: SwiperOptions = {
    slidesPerView: 1,
    navigation: {
      enabled: true,
      nextEl: '.right_arrow',
      prevEl: '.left_arrow'
    }
  }

  constructor(private service: ReceitaService) {

  }

  ngOnInit(): void {
    this.service.getAll().subscribe((receitas: IReceita[]) => {
      this.receitas = this.sliceIntoChunks(receitas, 4);
      this.pages = receitas.length > 4 ? new Array(Math.floor(receitas.length/4)+1) : new Array(1);
    })
  }

  onClickReceita(receita: IReceita): void {
    this.receita = receita;
    this.toggleShow();
  }

  toggleShow() {
    this.show = !this.show;
  }

  sliceIntoChunks(arr: IReceita[], chunkSize: number) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}


}
