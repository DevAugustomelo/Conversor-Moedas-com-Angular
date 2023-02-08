import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';



export interface HistoricoMoeda {
  data: string;
  hora: string;
  valor: number;
  moedaEscolhida: string;
  moedaConvertida: string;
  resultado: number;
  taxa: number;
  acao?: string
}

const CONVERSAO_DADOS: HistoricoMoeda[] = [
  {data: '12/01/2023', hora: 'Hydrogen', valor: 1.0079, moedaEscolhida: 'H', moedaConvertida: 'USD', resultado: 455, taxa: 5555, acao: ''},
  {data: '02/02/2023', hora: 'Helium', valor: 4.0026, moedaEscolhida: 'He', moedaConvertida: 'EUR', resultado: 455, taxa: 5555, acao: ''},
  {data: '01/01/2023', hora: 'Lithium', valor: 6.941, moedaEscolhida: 'Li', moedaConvertida: 'BRL', resultado: 455, taxa: 999, acao: ''},
  {data: '12/01/2023', hora: 'Beryllium', valor: 9.0122, moedaEscolhida: 'a', moedaConvertida: 'USD', resultado: 455, taxa: 5555, acao: ''},
  {data: '12/01/2023', hora: 'Boron', valor: 10.811, moedaEscolhida: 'B', moedaConvertida: 'USD', resultado: 455, taxa: 5555, acao: ''},
 
];




@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent {
  

  displayedColumns: string[] = ['data', 'hora', 'valor', 'moedaEscolhida','moedaConvertida', 'resultado', 'taxa', 'acao']
  dataSource = new MatTableDataSource(CONVERSAO_DADOS);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  

}

export function getNewDateBr () {
  const data = new Date().getDate().toString().padStart(2,'0') + "/" + 
  new Date().getMonth().toString().padStart(2,'0') + "/" +
  new Date().getFullYear();

  return data

}


 export function getConversao(valorEscolhido:number, moedaDe:string, moedaPara:string, valorConvertido:number, taxa:number) {
  const convert: HistoricoMoeda =  {
    data: getNewDateBr(),
    hora: new Date().getHours() + ":" + new Date().getMinutes().toFixed(),
    valor: valorEscolhido,
    moedaEscolhida: moedaDe,
    moedaConvertida: moedaPara,
    resultado: valorConvertido,
    taxa: taxa,
  }
  CONVERSAO_DADOS.push(convert)
}




