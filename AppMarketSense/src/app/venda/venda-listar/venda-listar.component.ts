import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { VendaService } from '../service/venda.service';
import { DialogService } from 'primeng/dynamicdialog';
import { Venda } from 'src/app/shared/models/venda.model';
import { VendaInserirComponent } from '../venda-inserir/venda-inserir.component';
import { MessageService } from 'primeng/api';
import { VendaVisualizarComponent } from '../venda-visualizar/venda-visualizar.component';

@Component({
  selector: 'app-venda-listar',
  templateUrl: './venda-listar.component.html',
  styleUrls: ['./venda-listar.component.css']
})
export class VendaListarComponent implements OnInit{
  sales: any = [];

  constructor(private cdr: ChangeDetectorRef, private messageService: MessageService,private vendaService: VendaService, private dialogService: DialogService) {}

  ngOnInit() {
    this.listaVendas();
  }

  listaVendas(){
    this.vendaService.getVendas()
    .then(vendas => {
      this.sales = vendas;
    })
    .catch(error => {
      console.error('Erro ao obter vendas:', error);
    });
  }


   async excluirVenda(venda: Venda){
    await this.vendaService.excluir(venda.id);
    this.showSucess();
    this.listaVendas();
   }

   showSucess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Excluido com sucesso!' });
  }


   abrirDialogCriar() {
    const ref = this.dialogService.open(VendaInserirComponent, {
      header: 'Cadastrar venda',
      width: '70%'
    });

    ref.onClose.subscribe((retorno: Venda) => {
      this.cdr.detectChanges();
      this.listaVendas();
    });
   }

   abrirDialogVisualizar(sale: Venda) {
    const ref = this.dialogService.open(VendaVisualizarComponent, {
      data: {
        venda: sale
      },
      header: 'Visualizar dados da venda',
      width: '70%'
    });

    ref.onClose.subscribe((retorno: Venda) => {
      
    });
   }
}
