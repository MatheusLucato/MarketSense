import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NavBarComponent } from '../components/menu-bar/menu-bar.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  senha: string = '';
  exibirSenha: boolean = false;
  senhaType: string = "password";

  constructor(private authService: AuthService, private cdr: ChangeDetectorRef, private router: Router,
    private messageService: MessageService) {}


  async login(username: string, senha: string){

    if((this.username != "" || this.username != null) && (this.senha != "" && this.senha != null)){
      const request = await this.authService.verificaLogin(this.username, btoa(this.senha));

      if(request){
        this.showSucess();
        this.authService.notificarAutenticacao(true);
        this.router.navigate(['/']);
      }
      else{
        this.showErro();
      }
    }
  }
  showErro() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Nome de usuario ou senha incorretos!' });
  }

  showSucess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Bem vindo!' });
  }

  exibeSenha(){
    this.exibirSenha = !this.exibirSenha;
    if(this.exibirSenha){
      this.senhaType = 'text';
    }
    else{
      this.senhaType = 'password';
    }
    this.cdr.detectChanges();

  }
}
