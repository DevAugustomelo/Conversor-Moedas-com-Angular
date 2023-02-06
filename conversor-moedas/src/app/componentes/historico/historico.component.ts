import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';



export interface HistoricoMoeda {
  data: number;
  hora: string;
  valor: number;
  moedaEscolhida: string;
  moedaConvertida: string;
  resultado: string;
  taxa: number;
  acao: string
}

const ELEMENT_DATA: HistoricoMoeda[] = [
  {data: 1, hora: 'Hydrogen', valor: 1.0079, moedaEscolhida: 'H', moedaConvertida: 'USD', resultado: '120', taxa: 0.433, acao: ''},
  {data: 2, hora: 'Helium', valor: 4.0026, moedaEscolhida: 'He', moedaConvertida: 'EUR', resultado: '120', taxa: 0.433, acao: ''},
  {data: 3, hora: 'Lithium', valor: 6.941, moedaEscolhida: 'Li', moedaConvertida: 'BRL', resultado: '120', taxa: 0.433, acao: ''},
  {data: 4, hora: 'Beryllium', valor: 9.0122, moedaEscolhida: 'a', moedaConvertida: 'USD', resultado: '120', taxa: 0.433, acao: ''},
  {data: 5, hora: 'Boron', valor: 10.811, moedaEscolhida: 'B', moedaConvertida: 'USD', resultado: '120', taxa: 0.433, acao: ''},
 
];


@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent {

  displayedColumns: string[] = ['data', 'hora', 'valor', 'moedaEscolhida','moedaConvertida', 'resultado', 'taxa', 'acao']
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
