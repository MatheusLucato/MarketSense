import { Component } from '@angular/core';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent {
  input1: string = '';
  input2: string = '';
  input3: string = '';
  mostrarLogin: boolean = true;
}
