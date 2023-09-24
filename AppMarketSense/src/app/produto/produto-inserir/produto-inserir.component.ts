import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-produto-inserir',
  templateUrl: './produto-inserir.component.html',
  styleUrls: ['./produto-inserir.component.css']
})
export class ProdutoInserirComponent {
  input1: string = '';
  input2: string = '';
  retorno: any = {};

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    
  }

  salvarCadastro() {
    this.retorno.name = this.input1;
    this.retorno.price = this.input2;
    this.ref.close(this.retorno);
  }
}
