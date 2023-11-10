import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from '../service/usuario.service';
import { ChangeDetectorRef } from '@angular/core';




@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent {
  usuario: Usuario;
  usuarioId: string | undefined;
  usuarioNome: string | undefined;
  senhaAtual: string | undefined;
  senhaNova = "";
  confirmaSenhaNova = "";
  edita = false;
  exibirSenha = false;
  senhaAtualType = 'password';
  senhaNovaType = 'password';
  confirmaSenhaNovaType = 'password';


  constructor(private cdr: ChangeDetectorRef, private usuarioService:UsuarioService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.usuario = { ...config.data.usuario };
    this.usuarioId = this.usuario.id;
    this.usuarioNome = this.usuario.nome;
    if (this.usuario.senha) 
      this.senhaAtual = atob(this.usuario.senha);
  }

  validaEdicao(){
    if((this.usuarioNome != "" && this.usuarioNome != null) && (this.senhaAtual != "" && this.senhaAtual != null)){
      if(this.usuarioNome != this.usuario.nome){
        this.usuario.nome = this.usuarioNome;
        this.edita = true;
      }
  
      if(this.senhaNova != "" && this.confirmaSenhaNova != null){
        if(this.senhaAtual != this.senhaNova){
          if(this.senhaNova === this.confirmaSenhaNova){
            this.usuario.senha = btoa(this.senhaNova);
            this.edita = true;
          }
        }
      }
    }
    
    
    if(this.edita)
      this.salvarEdicao();
    else
      this.ref.close();
  }

  async salvarEdicao() {
    await this.usuarioService.updateUser(this.usuario);
    this.ref.close();
  }

  exibeSenha(){
    this.exibirSenha = !this.exibirSenha;
    if(this.exibirSenha){
      this.senhaAtualType = 'text';
      this.senhaNovaType = 'text';
      this.confirmaSenhaNovaType = 'text';
    }
    else{
      this.senhaAtualType = 'password';
      this.senhaNovaType = 'password';
      this.confirmaSenhaNovaType = 'password';
    }
    this.cdr.detectChanges();

  }
}
