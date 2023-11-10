import { Component, OnInit } from '@angular/core';
import { VendaService } from '../service/venda.service';
import { DialogService } from 'primeng/dynamicdialog';
import { Venda } from 'src/app/shared/models/venda.model';
import { VendaEditarComponent } from '../venda-editar/venda-editar.component';
import { VendaInserirComponent } from '../venda-inserir/venda-inserir.component';

@Component({
  selector: 'app-venda-listar',
  templateUrl: './venda-listar.component.html',
  styleUrls: ['./venda-listar.component.css']
})
export class VendaListarComponent implements OnInit{
  sales: any = [];

  constructor(private vendaService: VendaService, private dialogService: DialogService) {}

  ngOnInit() {
    this.sales = this.vendaService.getVendas();
  }

  abrirDialogEditar(venda: Venda) {
    const ref = this.dialogService.open(VendaEditarComponent, {
      data: {
        venda: venda
      },
      header: 'Editar venda',
      width: '70%'
    });

    ref.onClose.subscribe((retorno: Venda) => {
      if (retorno) {
        this.sales[this.sales.findIndex((vendaFilter: Venda) => vendaFilter.id === retorno.id)].nome = retorno.nome;
      }
    });
   }

   excluirVenda(venda: Venda){
    this.sales.splice(this.sales.findIndex((vendaFilter: Venda) => vendaFilter.id === venda.id), 1)
   }


   abrirDialogCriar() {
    const ref = this.dialogService.open(VendaInserirComponent, {
      header: 'Cadastrar venda',
      width: '70%'
    });

    ref.onClose.subscribe((retorno: Venda) => {
      if (retorno) {
        let retornoArray = { id: this.sales.length + 1, nome: retorno.nome };
        //this.sales.push(retornoArray);
      }
    });
   }
}
