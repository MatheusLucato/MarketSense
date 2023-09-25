import { Produto } from "./produto.model";

export class Venda {
    constructor(
        public id: number,
        public nome: string,
        public produto: Produto
        ) { 
    }
}