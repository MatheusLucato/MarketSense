import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { Usuario } from 'src/app/shared/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly urlBase = environment.apiServer;

  constructor() { }

  async getUsers(): Promise<any> {
    try {
      const response = await axios.get(`${this.urlBase}/usuario`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter usuários:', error);
      throw error;
    }
  }

  saveUser(usuario: Usuario) {
    // Implemente a lógica para salvar o usuário, se necessário
  }
}
