import { ReceitaService } from './../../services/receita-service.service';
import { LoginService } from './../../services/login-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-receita',
  templateUrl: './create-receita.component.html',
  styleUrls: ['./create-receita.component.scss'],
})
export class CreateReceitaComponent implements OnInit {
  nomeReceita = ``;
  receita = ``;
  imagem = ``;
  valorSelecionado = `arquivo`;
  formData: FormData;

  constructor(
    private service: LoginService,
    private router: Router,
    private receitaService: ReceitaService
  ) {
    this.formData = new FormData();
  }

  ngOnInit(): void {
    let token = false;
    this.service.verifyToken().subscribe(
      (res) => {
        token = res.valid;
        if (!token) {
          this.router.navigate(['/login']);
        }
      },
      (err) => {
        this.router.navigate(['/login']);
      }
    );
  }

  onSubmit(): void {
    if (this.formData.has(`foto`)) {
      this.formData.append(`nome`, this.nomeReceita);
      this.formData.append(`receita`, this.receita);
      this.receitaService.postReceita(this.formData).subscribe(
        (res) => {
          alert(`Receita postada`);
          this.imagem = ``;
          this.nomeReceita = ``;
          this.receita = ``;
          this.formData = new FormData();
        },
        (err) => {
          alert(err);
        }
      );
    } else {
      this.formData.append(`nome`, this.nomeReceita);
      this.formData.append(`receita`, this.receita);
      this.formData.append(`imagem`, this.imagem);
      this.receitaService.postReceita(this.formData).subscribe(
        (res) => {
          alert(`Receita postada`);
          this.imagem = ``;
          this.nomeReceita = ``;
          this.receita = ``;
          this.formData = new FormData();
        },
        (err) => {
          alert(err);
        }
      );
    }
  }

  onFileChange(event: any) {
    const file: File = event.target.files[0];
    if (file && file.type.match(/image-*/)) {
      this.formData.append(`foto`, file);
      console.log(file.type);
    } else {
      alert(`Arquivo invalido`);
      return;
    }
  }
}
