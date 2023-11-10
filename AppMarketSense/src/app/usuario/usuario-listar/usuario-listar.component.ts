import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { UsuarioEditarComponent } from '../usuario-editar/usuario-editar.component';
import { UsuarioInserirComponent } from '../usuario-inserir/usuario-inserir.component';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from 'src/app/shared/models/usuario.model';



@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit{
  constructor(private dialogService: DialogService, private usuarioService: UsuarioService) {}
  users: any = [];

  ngOnInit() {
    this.listaUsers();
  }

  listaUsers(){
    this.usuarioService.getUsers()
    .then(users => {
      this.users = users;
    })
    .catch(error => {
      console.error('Erro ao obter usuários:', error);
    });
  }

   abrirDialogEditar(usuario: Usuario) {
    const ref = this.dialogService.open(UsuarioEditarComponent, {
      data: {
        usuario: usuario
      },
      header: 'Editar Usuário',
      width: '70%'
    });

    ref.onClose.subscribe((retorno: any) => {
  
      this.users = this.listaUsers();
      
    });
   }

  async excluirUser(userId: string){
    await this.usuarioService.excluir(userId);
    this.listaUsers();
  }


  abrirDialogCriar() {
    const ref = this.dialogService.open(UsuarioInserirComponent, {
      header: 'Cadastrar Usuário',
      width: '70%'
    });

    ref.onClose.subscribe((retorno: any) => {
      
      this.listaUsers();
      
    });

  }
}