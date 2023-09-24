import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ProdutoInserirComponent } from '../produto-inserir/produto-inserir.component';
import { ProdutoEditarComponent } from '../produto-editar/produto-editar.component';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.css']
})
export class ProdutoListarComponent {
  constructor(private dialogService: DialogService) {}
  products = [
    { id: 1, name: 'Coca', price: 10 },
    { id: 2, name: 'Vodka', price: 5},
    { id: 3, name: 'Guarana', price:15}
  ];

  abrirDialogEditar(product: any) {
    const ref = this.dialogService.open(ProdutoEditarComponent, {
      data: {
        product: product
      },
      header: 'Editar produto',
      width: '70%'
    });

    ref.onClose.subscribe((retorno: any) => {
      if (retorno) {
        this.products[this.products.findIndex(product => product.id === retorno.id)].name = retorno.name;
      }
    });
   }

   excluirProduct(product: any){
    this.products.splice(this.products.findIndex(productFilter => productFilter.id === product.id), 1)
   }


   abrirDialogCriar() {
    const ref = this.dialogService.open(ProdutoInserirComponent, {
      header: 'Cadastrar Produto',
      width: '70%'
    });

    ref.onClose.subscribe((retorno: any) => {
      if (retorno) {
         let retornoArray = { id: this.products.length + 1, name: retorno.name, price: retorno.price };
         this.products.push(retornoArray);
      }
    });
   }
   
}
