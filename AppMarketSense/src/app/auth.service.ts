import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import axios, { AxiosResponse } from 'axios';
import { environment } from 'src/environments/environment.development';
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly urlBase = environment.apiServer;
  private readonly AUTH_KEY = 'auth';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  constructor() {}

  async verificaLogin(username: string, senha: string): Promise<boolean> {
    try {
      const response = await axios.get<any>(`${this.urlBase}/auth?username=${encodeURIComponent(username)}&senha=${encodeURIComponent(senha)}`);
      const result = response.data.id !== null ? true : false;

      if(result){
        this.salvarChaveAutenticacao(uuidv4());
        this.salvarUserNameAutenticacao(response.data.nome);
        this.salvarIdAutenticacao(response.data.id);
      }

      return result;

      

    } catch (error) {
      console.error('Erro na requisição:', error);
      return false;
    }
  }

  salvarIdAutenticacao(id: string){
    sessionStorage.setItem('id', id);
  }

  obterIdAutenticacao(): string | null{
      return sessionStorage.getItem('id');
  }

  salvarUserNameAutenticacao(username: string){
      sessionStorage.setItem('username', username);
  }

  obterUserNameAutenticacao(): string | null{
      return sessionStorage.getItem('username');
  }

  salvarChaveAutenticacao(chave: string): void {
    sessionStorage.setItem(this.AUTH_KEY, chave);
  }

  obterChaveAutenticacao(): string | null {
    return sessionStorage.getItem(this.AUTH_KEY);
  }

  limparChaveAutenticacao(): void {
    sessionStorage.removeItem(this.AUTH_KEY);
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('id');
  }

  verificarChaveAutenticacao(): boolean {
    return this.obterChaveAutenticacao() == null ? false : true;
  }

  notificarAutenticacao(status: boolean): void {
    this.isAuthenticatedSubject.next(status);
  }

  obterStatusAutenticacao(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
}
