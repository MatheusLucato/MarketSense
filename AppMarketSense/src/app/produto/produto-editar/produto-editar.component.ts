import { ChangeDetectorRef, Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Produto } from 'src/app/shared/models/produto.model';
import { ProdutoService } from '../service/produto.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.css']
})
export class ProdutoEditarComponent {
  product: Produto;
  nomeProduto: string = "";
  precoProduto: string = "";
  edita: boolean = false;

  constructor(private messageService: MessageService, public ref: DynamicDialogRef, public config: DynamicDialogConfig, public cdRef: ChangeDetectorRef, private produtoService: ProdutoService) {
    this.product = { ...config.data.product };
    if(this.product.preco)
      this.precoProduto = this.product.preco;
    if(this.product.nome)
      this.nomeProduto = this.product.nome;
  }

  validaEdicao(){
    if(!this.isNumber(this.precoProduto))
      this.showErro();

    if((this.nomeProduto == this.product.nome) && (this.precoProduto == this.product.preco))
      this.showAlteraDadosMessage();

    
    if((this.nomeProduto != "" && this.nomeProduto != null) && (this.precoProduto != "" && this.precoProduto != null)){
  
      if(((this.precoProduto != this.product.preco) || (this.nomeProduto != this.product.nome)) && this.isNumber(this.precoProduto)){
          this.product.preco = this.precoProduto;
          this.product.nome = this.nomeProduto;
          this.edita = true;
      }
      else{
        this.edita = false;
      }
    }
    else{
      this.showErro();
    }
    
    if(this.edita)
      this.salvarEdicao();
  }



  showErro() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Preencha os campos obrigatorios corretamente!' });
  }

  showSucess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Dados atualizados com sucesso!' });
  }

  showAlteraDadosMessage() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Dados identicos, realize alguma alteracao!' });
  }

  
  isNumber(value: string): boolean {
    
  return !isNaN(Number(value));
  }


  async salvarEdicao() {
    await this.produtoService.updateProduct(this.product);
    this.showSucess();
    this.ref.close();
  }
}
