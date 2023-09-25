import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ProdutoInserirComponent } from '../produto-inserir/produto-inserir.component';
import { ProdutoEditarComponent } from '../produto-editar/produto-editar.component';
import { ProdutoService } from '../service/produto.service';
import { Produto } from 'src/app/shared/models/produto.model';


@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.css']
})
export class ProdutoListarComponent implements OnInit{
  products: any = []
  constructor(private dialogService: DialogService, private produtoService: ProdutoService) {}

  ngOnInit(){
    this.products = this.produtoService.getProduct();
  }

  abrirDialogEditar(product: Produto) {
    const ref = this.dialogService.open(ProdutoEditarComponent, {
      data: {
        product: product
      },
      header: 'Editar produto',
      width: '70%'
    });

    ref.onClose.subscribe((retorno: Produto) => {
      this.products[this.products.findIndex((productFilter: Produto) => productFilter.id === retorno.id)].nome = retorno.nome;
      this.products[this.products.findIndex((productFilter: Produto) => productFilter.id === retorno.id)].preco = retorno.preco;
      
    });
   }

   excluirProduct(product: Produto){
    this.products.splice(this.products.findIndex((productFilter: Produto) => productFilter.id === product.id), 1)
   }


   abrirDialogCriar() {
    const ref = this.dialogService.open(ProdutoInserirComponent, {
      header: 'Cadastrar Produto',
      width: '70%'
    });

    ref.onClose.subscribe((retorno: Produto) => {
      if (retorno) {
         let retornoArray = { id: this.products.length + 1, nome: retorno.nome, preco: retorno.preco };
         this.products.push(retornoArray);
      }
    });
   }
   
}
