import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProdutoService } from 'src/app/produto/service/produto.service';
import { Produto } from 'src/app/shared/models/produto.model';
import { Venda } from 'src/app/shared/models/venda.model';

@Component({
  selector: 'app-venda-inserir',
  templateUrl: './venda-inserir.component.html',
  styleUrls: ['./venda-inserir.component.css']
})
export class VendaInserirComponent {
  produtos: any = []

  input1: string = '';
  input2: string = '';
  input3: string = '';
  constructor(public ref: DynamicDialogRef,private produtoService: ProdutoService) {}

  ngOnInit(){
    this.produtos = this.produtoService.getProduct();
  }

  salvarCadastro() {
    this.ref.close(new Venda(1, this.input1, new Produto(0, this.input2) ));
  }

}
