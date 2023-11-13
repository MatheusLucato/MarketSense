import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ProdutoInserirComponent } from '../produto-inserir/produto-inserir.component';
import { ProdutoEditarComponent } from '../produto-editar/produto-editar.component';
import { ProdutoService } from '../service/produto.service';
import { Produto } from 'src/app/shared/models/produto.model';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.css']
})
export class ProdutoListarComponent implements OnInit{
  products: any = []
  constructor(private messageService: MessageService, private dialogService: DialogService, private produtoService: ProdutoService) {}

  ngOnInit() {
    this.listaProdutos();
  }

  listaProdutos(){
    this.produtoService.getProduct()
    .then(products => {
      this.products = products;
    })
    .catch(error => {
      console.error('Erro ao obter produtos:', error);
    });
      
  }

  abrirDialogEditar(product: Produto) {
    const ref = this.dialogService.open(ProdutoEditarComponent, {
      data: {
        product: product
      },
      header: 'Editar produto',
      width: '70%'
    });

    ref.onClose.subscribe((retorno: any) => {      
      this.listaProdutos();
    });
   }
   

   async excluirProduct(productId: string){
    await this.produtoService.excluir(productId);
    this.listaProdutos();

    
  }

   showSucess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Excluido com sucesso!' });
  }

   showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erro na exclusao, verifique se possui venda cadastrada ao produto!' });
  }

  arraysSaoIguais(array1: any[], array2: any[]): boolean {
    if (array1.length !== array2.length) {
        return false;
    }

    return array1.every((element, index) => element === array2[index]);
  }


   abrirDialogCriar() {
    const ref = this.dialogService.open(ProdutoInserirComponent, {
      header: 'Cadastrar Produto',
      width: '70%'
    });

    ref.onClose.subscribe((retorno: any) => {
      
      this.listaProdutos();
      
    });
   }
   
}
