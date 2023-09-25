import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioInserirComponent } from './usuario-inserir/usuario-inserir.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { UsuarioListarComponent } from './usuario-listar/usuario-listar.component';
import { UsuarioService } from './service/usuario.service';



@NgModule({
  declarations: [
    UsuarioInserirComponent,
    UsuarioEditarComponent,
    UsuarioListarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }