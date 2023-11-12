
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/auth.service';


@Component({
    selector: 'menu-bar',
    templateUrl: './menu-bar.component.html'
})
export class NavBarComponent {
    sidebarVisible:boolean = false;
    username: any = '';
    logado: boolean = false;


    constructor(private authService: AuthService, private router: Router,
    private messageService: MessageService){
        this.atualizarEstadoAutenticacao();

        
        this.authService.obterStatusAutenticacao().subscribe(() => {
          this.atualizarEstadoAutenticacao();
        });
        
    }

    private atualizarEstadoAutenticacao(): void {
        if (this.authService.obterChaveAutenticacao() != null) {
          this.username = this.authService.obterUserNameAutenticacao();
          this.logado = true;
        } else {
          this.logado = false;
        }
      }

    logout(){
        this.showSucess();
        this.authService.limparChaveAutenticacao();
        this.router.navigate(['/login']);
        this.logado = false;
    }

    showSucess() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Volte sempre!' });
    }
}