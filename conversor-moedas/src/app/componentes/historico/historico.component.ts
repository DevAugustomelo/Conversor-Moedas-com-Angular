import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';



export interface HistoricoMoeda {
  data: string;
  hora: string;
  valor: string;
  moedaEscolhida: string;
  moedaConvertida: string;
  resultado: string;
  valorDolar?: string
  taxa: number;
  acao?: string
}

const CONVERSAO_DADOS: HistoricoMoeda[] = [
  {data: '12/01/2023', hora: 'Hydrogen', valor: '1.0079', moedaEscolhida: 'H', moedaConvertida: 'USD', resultado: '455', valorDolar: '222', taxa: 5555, acao: ''},
  {data: '02/02/2023', hora: 'Helium', valor: '4.0026', moedaEscolhida: 'He', moedaConvertida: 'EUR', resultado: '122455', valorDolar: '222', taxa: 5555, acao: ''},
  {data: '12/01/2023', hora: 'Boron', valor: '10.811', moedaEscolhida: 'B', moedaConvertida: 'USD', resultado: '12455', valorDolar: '222', taxa: 5555, acao: ''},
 
];


@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent {

  dolarAlto = 1000
  

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


 export function getConversao(valorEscolhido:string, moedaDe:string, moedaPara:string, valorConvertido:string, taxa:number, valorDolar:string) {
  const convert: HistoricoMoeda =  {
    data: getNewDateBr(),
    hora: new Date().getHours() + ":" + new Date().getMinutes().toString().padStart(2,'0'),
    valor: valorEscolhido,
    moedaEscolhida: moedaDe,
    moedaConvertida: moedaPara,
    resultado: valorConvertido,
    taxa: taxa,
    valorDolar: valorDolar,
  }
  CONVERSAO_DADOS.push(convert)
}




