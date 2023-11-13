import { Produto } from "./produto.model";

export class Venda {
    constructor(
        public id: string,
        public dataVenda: string,
        public idUsuario: string,
        public produtos: Produto[]
        ) { 
    }
}