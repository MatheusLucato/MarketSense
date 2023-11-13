import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VendaInserirComponent } from './venda-inserir/venda-inserir.component';
import { VendaListarComponent } from './venda-listar/venda-listar.component';
import { VendaService } from './service/venda.service';
import { VendaVisualizarComponent } from './venda-visualizar/venda-visualizar.component';

@NgModule({
  declarations: [
    VendaInserirComponent,
    VendaListarComponent,
    VendaVisualizarComponent

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