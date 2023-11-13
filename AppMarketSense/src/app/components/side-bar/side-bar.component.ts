import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  admin!: boolean;

  constructor(private authService: AuthService, private router: Router,
    private messageService: MessageService){
        this.atualizarEstadoAutenticacao();

        
        this.authService.obterStatusAutenticacao().subscribe(() => {
          this.atualizarEstadoAutenticacao();
        });
        
    }

  private atualizarEstadoAutenticacao(): void {
    if (this.authService.obterAdminAutenticacao() != null) {
      this.admin = this.authService.obterAdminAutenticacao() == "false" ? false : true;
    } else {
      this.admin = false;
    }
  }

}
