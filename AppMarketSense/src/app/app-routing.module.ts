import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraProdutoComponent } from './cadastra-produto/cadastra-produto.component';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'produto/cadastrar',
    component: CadastraProdutoComponent
  },
  {
    path: 'login',
    component: LoginCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
