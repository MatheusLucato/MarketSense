import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraProdutoComponent } from './cadastra-produto/cadastra-produto.component';

const routes: Routes = [
  {
    path: 'produto/cadastrar',
    component: CadastraProdutoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
