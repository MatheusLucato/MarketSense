import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Venda } from 'src/app/shared/models/venda.model';

@Component({
  selector: 'app-venda-editar',
  templateUrl: './venda-editar.component.html',
  styleUrls: ['./venda-editar.component.css']
})
export class VendaEditarComponent {
  sale: Venda;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.sale = { ...config.data.venda };
  }

  salvarEdicao() {
    this.ref.close(this.sale);
  }
}
