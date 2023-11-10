import { Component } from '@angular/core';
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

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private usuarioService: UsuarioService) {
    
  }
  validaCadastro() {
    if((this.newPass === this.newPassConfirm) && this.nomeUser != null)
      this.salvarCadastro();
  }

  salvarCadastro() {
    this.usuarioService.saveUser(new Usuario(this.nomeUser, this.newPass))
    this.ref.close();
  }

}
