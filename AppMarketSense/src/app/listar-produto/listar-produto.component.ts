import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'listar-produto',
    templateUrl: 'listar-produto.component.html'
})
export class ListarProdutoComponent implements OnInit {
    products!: [];


    ngOnInit() {

    }
}