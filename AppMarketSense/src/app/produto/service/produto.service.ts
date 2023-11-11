import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { Produto } from 'src/app/shared/models/produto.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private readonly urlBase = environment.apiServer;
  
  async getProduct(): Promise<Produto[]> {
    try {
      const response: AxiosResponse<Produto[]> = await axios.get(`${this.urlBase}/produto`);
      return response.data;
    } catch (error) {
          console.error('Erro ao obter produtos:', error);   
          throw error;
    }
  }

  async saveProduct(produto: Produto) {
    try {
      await axios.post(`${this.urlBase}/produto`, {
        nome: produto.nome,
        preco: produto.preco,
    });      console.log('Produto inserido com sucesso.');
    } catch (error) {
      console.error('Erro ao inserir o produto:', error);
    }
  }

  async excluir(produtoId: string): Promise<any> {
    try {
      await axios.delete(`${this.urlBase}/produto/${produtoId}`);
      console.log('Produto excluído com sucesso.');
    } catch (error) {
      console.error('Erro ao excluir Produto:', error);
    }
  }

  async updateProduct(produto: Produto) {
    try {
      await axios.put(`${this.urlBase}/produto`, {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
    });      console.log('Produto atualizado com sucesso.');
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error);
    }
  }

constructor() { }
}
