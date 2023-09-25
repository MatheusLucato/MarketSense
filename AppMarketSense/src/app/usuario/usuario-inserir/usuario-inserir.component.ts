import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Usuario } from 'src/app/shared/models/usuario.model';

@Component({
  selector: 'app-usuario-inserir',
  templateUrl: './usuario-inserir.component.html',
  styleUrls: ['./usuario-inserir.component.css']
})
export class UsuarioInserirComponent {
  input1: string = '';
  input2: string = '';

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    
  }

  salvarCadastro() {
    this.ref.close(new Usuario(0, this.input1));
  }

}
