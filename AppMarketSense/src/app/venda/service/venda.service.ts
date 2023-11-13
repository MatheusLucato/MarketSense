import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { Venda } from 'src/app/shared/models/venda.model';
import { environment } from '../../../environments/environment';
import { Produto } from 'src/app/shared/models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  private readonly urlBase = environment.apiServer;

  constructor() { }

  async getVendas(): Promise<Venda[]> {
    try {
      const response: AxiosResponse<Venda[]> = await axios.get(`${this.urlBase}/vendas`);
      return response.data;
    } catch (error) {
          console.error('Erro ao obter vendas:', error);   
          throw error;
    }
  }

  async saveVendas(dataVenda: string, idUsuario: string, produtos: Produto[]) {
    try {
      
      const response = await axios.post(`${this.urlBase}/vendas`, {
        dataVenda,
        idUsuario,
        produtos
      });
  
      console.log('Venda inserida com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao inserir a venda:', error);
    }
  }

  async excluir(vendaId: string): Promise<any> {
    try {
      await axios.delete(`${this.urlBase}/vendas/${vendaId}`);
      console.log('Venda excluída com sucesso.');
    } catch (error) {
      console.error('Erro ao excluir venda:', error);
    }
  }

  async getProductSale(vendaId: string): Promise<Produto[]> {
    try {
        const response: AxiosResponse<Venda[]> = await axios.get(`${this.urlBase}/vendas/${vendaId}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao consultar produtos da venda:', error);
        throw error;
    }
}

}
