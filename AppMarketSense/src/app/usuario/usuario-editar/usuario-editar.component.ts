import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';



@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent {
  usuario: any;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.usuario = { ...config.data.usuario };
  }

  salvarEdicao() {
    this.ref.close(this.usuario);
  }
}
