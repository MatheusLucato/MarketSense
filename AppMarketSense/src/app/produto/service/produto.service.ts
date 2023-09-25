import { Injectable } from '@angular/core';
import * as data from '../../data.json';
import { Produto } from 'src/app/shared/models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private jsonData: any = data;
  
  getProduct() {
    return this.jsonData.products;
  }
constructor() { }
}
