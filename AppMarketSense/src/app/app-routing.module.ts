import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //TODO: fullpath para retornar pagina principal quando URL nao for encontrada
  {
    //path: 'enderecos/listar',
    //component: ListarEnderecoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
