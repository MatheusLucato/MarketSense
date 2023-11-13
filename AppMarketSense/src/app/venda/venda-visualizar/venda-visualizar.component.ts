import { ChangeDetectorRef, Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProdutoService } from 'src/app/produto/service/produto.service';
import { Produto } from 'src/app/shared/models/produto.model';
import { VendaService } from '../service/venda.service';
import { Venda } from 'src/app/shared/models/venda.model';

@Component({
  selector: 'app-venda-visualizar',
  templateUrl: './venda-visualizar.component.html',
  styleUrls: ['./venda-visualizar.component.css']
})
export class VendaVisualizarComponent {

  products: Produto[] = [];
  venda!: Venda;

  constructor(private produtoService: ProdutoService, private messageService: MessageService, private cdr: ChangeDetectorRef, private vendaService:VendaService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.venda = { ...config.data.venda };
    this.listaProdutos();
  }

  ngOnInit(){
    this.listaProdutos();
  }

  listaProdutos(){
    this.vendaService.getProductSale(this.venda.id)
    .then(products => {
      this.products = products;
    })
    .catch(error => {
      console.error('Erro ao obter produtos:', error);
    });
  }

}
