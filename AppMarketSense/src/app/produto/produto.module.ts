import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoInserirComponent } from './produto-inserir/produto-inserir.component';
import { ProdutoEditarComponent } from './produto-editar/produto-editar.component';
import { ProdutoListarComponent } from './produto-listar/produto-listar.component';
import { ProdutoService } from './service/produto.service';



@NgModule({
  declarations: [
    ProdutoInserirComponent,
    ProdutoEditarComponent,
    ProdutoListarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ProdutoService
  ]
})
export class ProdutoModule { }