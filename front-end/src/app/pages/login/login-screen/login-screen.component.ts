import { LoginService } from './../../../services/login-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {
  username: string = '';
  password: string = '';
  validToken = true;

  constructor(private service: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.verifyToken();
  }

  onSubmit() {
    this.service.loginUser(this.username, this.password).subscribe(
      (res) => {
        localStorage.setItem('token', res.token ?? '');
        alert('Logado com sucesso!')
        this.validToken = true;
        this.service.refreshHeader.emit(true);
        this.router.navigate(['create-receita']);
      },
      (err) => {
        alert('Suas credenciais estão inválidas!');
      }
    );
  }

  verifyToken() {
    this.service.verifyToken().subscribe(
      (token) => {
        this.validToken = true;
        this.router.navigate(['create-receita']);
      },
      (err) => {
        this.validToken = false;
        this.service.refreshHeader.emit(false);
      }
    );
  }
}
