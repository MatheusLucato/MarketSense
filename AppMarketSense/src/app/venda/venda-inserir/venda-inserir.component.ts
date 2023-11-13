import { ChangeDetectorRef, Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProdutoService } from 'src/app/produto/service/produto.service';
import { Produto } from 'src/app/shared/models/produto.model';
import { VendaService } from '../service/venda.service';
import { AuthService } from 'src/app/auth.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-venda-inserir',
  templateUrl: './venda-inserir.component.html',
  styleUrls: ['./venda-inserir.component.css']
})
export class VendaInserirComponent {
  products: Produto[] = [];
  selectedProducts!: any[];

  constructor(private cdr: ChangeDetectorRef, private messageService: MessageService,private authService: AuthService, private vendaService: VendaService, public ref: DynamicDialogRef ,private produtoService: ProdutoService) {}

  ngOnInit(){
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

  salvarCadastro() {
    const idUser = this.authService.obterIdAutenticacao() != null ? this.authService.obterIdAutenticacao() : "";
    if(idUser != null)
      this.vendaService.saveVendas(new Date().toLocaleDateString(), idUser, this.selectedProducts);
  }

  onProductSelection(event: any) {
    const selectedOptions = event.target.selectedOptions;
    const selectedIds = Array.from(selectedOptions, (option: any) => option.value);
  
    this.selectedProducts = this.products.filter(product => {
      
    return product && product.id !== undefined && selectedIds.includes(product.id.toString());
    });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Escolha pelo menos 1 produto!' });
  } 

  showSucess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Venda cadastrada!' });
  }
  
  
  validarCadastro() {
    if (this.selectedProducts) {
      this.salvarCadastro();
      this.showSucess();
      this.cdr.detectChanges();
      this.ref.close();
    } else {
      this.showError();
    }
  }

}
