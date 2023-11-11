import { ChangeDetectorRef, Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Produto } from 'src/app/shared/models/produto.model';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-inserir',
  templateUrl: './produto-inserir.component.html',
  styleUrls: ['./produto-inserir.component.css']
})
export class ProdutoInserirComponent {
  nomeProduto: string = '';
  precoProduto: string = '';

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private cdr: ChangeDetectorRef, private produtoService: ProdutoService) {
  }

  validaCadastro() {
    if(this.nomeProduto != "" && this.precoProduto != ""){
      if(this.isNumber(this.precoProduto))
        this.salvarCadastro();
    }
    
  }

  isNumber(value: string): boolean {
    
    return !isNaN(Number(value));
  }
  

  async salvarCadastro() {
  
    await this.produtoService.saveProduct(new Produto("", this.nomeProduto, this.precoProduto));
    this.ref.close();
  }

}
