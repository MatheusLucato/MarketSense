import { Injectable } from '@angular/core';
import * as data from '../../data.json';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private jsonData: any = data;
  
    getUsers() {
      return this.jsonData.users;
    }
  constructor() { }
}
