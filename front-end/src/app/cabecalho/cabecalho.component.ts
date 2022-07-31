import { LoginService } from './../services/login-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

  validToken: boolean = false;

  constructor(private service: LoginService) {


   }

  ngOnInit(): void {
    this.verifyToken();
  }

  verifyToken() {
    this.service.verifyToken().subscribe(
      (token) => {
        this.validToken = true;
      },
      (err) => {
        this.validToken = false;
      }
    );
  }

}
