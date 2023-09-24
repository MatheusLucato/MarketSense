import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { UsuarioEditarComponent } from '../usuario-editar/usuario-editar.component';
import { UsuarioInserirComponent } from '../usuario-inserir/usuario-inserir.component';


@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent {
  constructor(private dialogService: DialogService) {}
  users = [
    { id: 1, name: 'Usuario 1' },
    { id: 2, name: 'Usuario 2' },
    { id: 3, name: 'Usuario 3' }
  ];

   abrirDialogEditar(usuario: any) {
    const ref = this.dialogService.open(UsuarioEditarComponent, {
      data: {
        usuario: usuario
      },
      header: 'Editar Usuário',
      width: '70%'
    });

    ref.onClose.subscribe((retorno: any) => {
      if (retorno) {
        this.users[this.users.findIndex(user => user.id === retorno.id)].name = retorno.name;
      }
    });
   }

   excluirUser(usuario: any){
    this.users.splice(this.users.findIndex(user => user.id === usuario.id), 1)
   }


   abrirDialogCriar() {
    const ref = this.dialogService.open(UsuarioInserirComponent, {
      header: 'Cadastrar Usuário',
      width: '70%'
    });

    ref.onClose.subscribe((retorno: any) => {
      if (retorno) {
        let retornoArray = { id: this.users.length + 1, name: retorno };
        this.users.push(retornoArray);
      }
    });
   }
}