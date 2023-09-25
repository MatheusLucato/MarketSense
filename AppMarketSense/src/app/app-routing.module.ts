import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { ProdutoListarComponent } from './produto/produto-listar/produto-listar.component';
import { VendaListarComponent } from './venda/venda-listar/venda-listar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'produto/listar',
    component: ProdutoListarComponent
  },
  {
    path: 'login',
    component: LoginCadastroComponent
  },
  {
    path: 'usuarios/listar',
    component: UsuarioListarComponent
  },
  {
    path: 'vendas/listar',
    component: VendaListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
