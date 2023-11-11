import { ChangeDetectorRef, Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Produto } from 'src/app/shared/models/produto.model';
import { ProdutoService } from '../service/produto.service';

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

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, public cdRef: ChangeDetectorRef, private produtoService: ProdutoService) {
    this.product = { ...config.data.product };
    if(this.product.preco)
      this.precoProduto = this.product.preco;
    if(this.product.nome)
      this.nomeProduto = this.product.nome;
  }

  validaEdicao(){
    if((this.nomeProduto != "" && this.nomeProduto != null) && (this.precoProduto != "" && this.precoProduto != null)){
      if(this.nomeProduto != this.product.nome){
        this.product.nome = this.nomeProduto;
        this.edita = true;
      }
      else{
        this.edita = false;
      }
  
      if(this.precoProduto != this.product.preco && (this.isNumber(this.precoProduto))){
          this.product.preco = this.precoProduto;
          this.edita = true;
      }
      else{
        this.edita = false;
      }
    }
    
    if(this.edita)
      this.salvarEdicao();
  }

  
  isNumber(value: string): boolean {
    
  return !isNaN(Number(value));
  }


  async salvarEdicao() {
    await this.produtoService.updateProduct(this.product);
    this.ref.close();
  }
}
