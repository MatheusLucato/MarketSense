import { ChangeDetectorRef, Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-usuario-inserir',
  templateUrl: './usuario-inserir.component.html',
  styleUrls: ['./usuario-inserir.component.css']
})
export class UsuarioInserirComponent {
  nomeUser: string = '';
  newPass: string = '';
  newPassConfirm: string = '';
  exibirSenha: boolean = false;
  senhaNovaType: string = 'password';
  senhaNovaConfirmaType: string = 'password';

  constructor(private cdr: ChangeDetectorRef,public ref: DynamicDialogRef, public config: DynamicDialogConfig, private usuarioService: UsuarioService) {
    
  }
  validaCadastro() {
    if(this.newPass != "" && this.newPassConfirm != "" && this.nomeUser != ""){
      if((this.newPass === this.newPassConfirm) && this.nomeUser != null)
        this.salvarCadastro();
    }
    
  }

  async salvarCadastro() {
  
    await this.usuarioService.saveUser(new Usuario("", this.nomeUser, btoa(this.newPass)));
    this.ref.close();
  }

  exibeSenha(){
    this.exibirSenha = !this.exibirSenha;
    if(this.exibirSenha){
      this.senhaNovaType = 'text';
      this.senhaNovaConfirmaType = 'text';
    }
    else{
      this.senhaNovaType = 'password';
      this.senhaNovaConfirmaType = 'password';
    }
    this.cdr.detectChanges();

  }

}
