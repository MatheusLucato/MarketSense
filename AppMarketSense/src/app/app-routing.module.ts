import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { ProdutoListarComponent } from './produto/produto-listar/produto-listar.component';
import { VendaListarComponent } from './venda/venda-listar/venda-listar.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guards';
import { NavBarComponent } from './components/menu-bar/menu-bar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'produto/listar',
    component: ProdutoListarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'usuarios/listar',
    component: UsuarioListarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'vendas/listar',
    component: VendaListarComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
