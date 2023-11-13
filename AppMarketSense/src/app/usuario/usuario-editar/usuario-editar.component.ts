import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from '../service/usuario.service';
import { ChangeDetectorRef } from '@angular/core';
import { MessageService } from 'primeng/api';




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
  senhaNova: string = "";
  confirmaSenhaNova: string = "";
  edita: boolean = false;
  exibirSenha: boolean = false;
  senhaAtualType: string = 'password';
  senhaNovaType: string = 'password';
  confirmaSenhaNovaType: string = 'password';
  adminCheck: boolean = false;


  constructor(private messageService: MessageService, private cdr: ChangeDetectorRef, private usuarioService:UsuarioService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.usuario = { ...config.data.usuario };
    this.usuarioId = this.usuario.id;
    this.usuarioNome = this.usuario.nome;
    this.adminCheck = this.usuario.admin != undefined ? this.usuario.admin : false;
    if (this.usuario.senha) 
      this.senhaAtual = atob(this.usuario.senha);
  }

  validaEdicao() {

    if (this.usuario.nome === this.usuarioNome && this.senhaNova === this.confirmaSenhaNova && this.senhaNova === this.usuario.senha && this.adminCheck === this.usuario.admin) 
      this.showAlteraDadosMessage();
    
    if (((this.senhaNova == "" || this.senhaNova == null) && (this.confirmaSenhaNova == "" || this.confirmaSenhaNova == null)) && this.usuarioNome == this.usuarioNome && this.adminCheck === this.usuario.admin)
      this.showAlteraDadosMessage();
    
    
      

    if (this.usuarioNome != null && this.usuarioNome != "" && this.usuarioNome != this.usuario.nome) {
      this.usuario.nome = this.usuarioNome;
      this.edita = true;
    } else {
      this.edita = false;
    }
  
    if (this.senhaNova != null && this.senhaNova != "" && this.confirmaSenhaNova != null && this.confirmaSenhaNova != "") {
      if (this.senhaNova === this.confirmaSenhaNova && this.senhaAtual != this.senhaNova) {
        this.usuario.senha = btoa(this.senhaNova);
        this.edita = true;
      } else {
        this.edita = false;
      }
    }
    if(this.senhaNova != this.confirmaSenhaNova){
      this.showErro();
      this.edita=false;
    }

    if(this.adminCheck != this.usuario.admin){
      this.usuario.admin = this.adminCheck;
      this.edita = true;
    }
  
    if (this.edita) {
      this.salvarEdicao();
    }
  }
  
  alterarValorCheckbox() {
    this.adminCheck = !this.adminCheck;
  }

  showErro() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Preencha os campos obrigatorios corretamente!' });
  }

  showSucess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Dados atualizados com sucesso!' });
  }

  showAlteraDadosMessage() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Dados identicos, realize alguma alteracao!' });
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
