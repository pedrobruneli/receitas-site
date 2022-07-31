import { IReceita } from '../../../models/receita.model';
import { Component, Injectable, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-receita-poupup',
  templateUrl: './receita-poupup.component.html',
  styleUrls: ['./receita-poupup.component.scss']
})
export class ReceitaPoupupComponent implements OnInit {

  @Input() receita!: IReceita;
  @Input() show = false;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }

  toggleShow() {
    this.close.emit(!this.show);
  }

}
