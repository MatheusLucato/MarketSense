import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { environment } from '../../../environments/environment';
import { Usuario } from 'src/app/shared/models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly urlBase = environment.apiServer;

  constructor() { }

  async getUsers(): Promise<Usuario[]> {
    try {
      const response: AxiosResponse<Usuario[]> = await axios.get(`${this.urlBase}/usuario`);
      return response.data;
    } catch (error) {
          console.error('Erro ao obter usuários:', error);   
          throw error;
    }
  }

  async excluir(usuarioId: string): Promise<any> {
    try {
      await axios.delete(`${this.urlBase}/usuario/${usuarioId}`);
      console.log('Usuário excluído com sucesso.');
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
    }
  }

  async saveUser(usuario: Usuario) {
    try {
      await axios.post(`${this.urlBase}/usuario`, {
        nome: usuario.nome,
        senha: usuario.senha,
        admin: usuario.admin,
    });      console.log('Usuário inserido com sucesso.');
    } catch (error) {
      console.error('Erro ao inserir o usuário:', error);
    }
  }

  async updateUser(usuario: Usuario) {
    try {
      await axios.put(`${this.urlBase}/usuario`, {
        id: usuario.id,
        nome: usuario.nome,
        senha: usuario.senha,
        admin: usuario.admin
    });      console.log('Usuário atualizado com sucesso.');
    } catch (error) {
      console.error('Erro ao atualizar o usuário:', error);
    }
  }
}
