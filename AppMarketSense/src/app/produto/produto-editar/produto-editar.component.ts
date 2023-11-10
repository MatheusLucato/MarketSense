import { ChangeDetectorRef, Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Produto } from 'src/app/shared/models/produto.model';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.css']
})
export class ProdutoEditarComponent {
  product: Produto;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, public cdRef: ChangeDetectorRef) {
    this.product = { ...config.data.product };
  }

  salvarEdicao() {
    this.ref.close(this.product);
  }
}
