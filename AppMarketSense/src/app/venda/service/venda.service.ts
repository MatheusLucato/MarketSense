import { Injectable } from '@angular/core';
import * as data from '../../data.json';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
    private jsonData: any = data;
  
    getVendas() {
      return this.jsonData.sales;
    }
  constructor() { }
}
