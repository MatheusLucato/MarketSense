import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Produto } from 'src/app/shared/models/produto.model';

@Component({
  selector: 'app-produto-inserir',
  templateUrl: './produto-inserir.component.html',
  styleUrls: ['./produto-inserir.component.css']
})
export class ProdutoInserirComponent {
  input1: string = '';
  input2: string = '';

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
  }

  salvarCadastro() {
    this.ref.close(new Produto(0,this.input1, this.input2));
  }
}
