import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VendaEditarComponent } from './venda-editar/venda-editar.component';
import { VendaInserirComponent } from './venda-inserir/venda-inserir.component';
import { VendaListarComponent } from './venda-listar/venda-listar.component';
import { VendaService } from './service/venda.service';

@NgModule({
  declarations: [
    VendaInserirComponent,
    VendaEditarComponent,
    VendaListarComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    VendaService
  ]
})
export class VendaModule {
}