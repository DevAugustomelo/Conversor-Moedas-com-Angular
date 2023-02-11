import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { Observable, of as observableOf, merge, map } from 'rxjs';



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
  {data: '12/01/2023', hora: 'Hydrogen', valor: '1.0079', moedaEscolhida: 'H', moedaConvertida: 'USD', resultado: '455', valorDolar: '222', taxa: 5555, acao: ''},
  {data: '02/02/2023', hora: 'Helium', valor: '4.0026', moedaEscolhida: 'He', moedaConvertida: 'EUR', resultado: '122455', valorDolar: '222', taxa: 5555, acao: ''},
  {data: '12/01/2023', hora: 'Boron', valor: '10.811', moedaEscolhida: 'B', moedaConvertida: 'USD', resultado: '12455', valorDolar: '222', taxa: 5555, acao: ''},
  {data: '12/01/2023', hora: 'Hydrogen', valor: '1.0079', moedaEscolhida: 'H', moedaConvertida: 'USD', resultado: '455', valorDolar: '222', taxa: 5555, acao: ''},
  {data: '02/02/2023', hora: 'Helium', valor: '4.0026', moedaEscolhida: 'He', moedaConvertida: 'EUR', resultado: '122455', valorDolar: '222', taxa: 5555, acao: ''},
  {data: '12/01/2023', hora: 'Boron', valor: '10.811', moedaEscolhida: 'B', moedaConvertida: 'USD', resultado: '12455', valorDolar: '222', taxa: 5555, acao: ''},
  {data: '12/01/2023', hora: 'Hydrogen', valor: '1.0079', moedaEscolhida: 'H', moedaConvertida: 'USD', resultado: '455', valorDolar: '222', taxa: 5555, acao: ''},
  {data: '02/02/2023', hora: 'Helium', valor: '4.0026', moedaEscolhida: 'He', moedaConvertida: 'EUR', resultado: '122455', valorDolar: '222', taxa: 5555, acao: ''},
  {data: '12/01/2023', hora: 'Boron', valor: '10.811', moedaEscolhida: 'B', moedaConvertida: 'USD', resultado: '12455', valorDolar: '222', taxa: 5555, acao: ''},
  {data: '12/01/2023', hora: 'Hydrogen', valor: '1.0079', moedaEscolhida: 'H', moedaConvertida: 'USD', resultado: '455', valorDolar: '222', taxa: 5555, acao: ''},
  {data: '02/02/2023', hora: 'Helium', valor: '4.0026', moedaEscolhida: 'He', moedaConvertida: 'EUR', resultado: '122455', valorDolar: '222', taxa: 5555, acao: ''},
  {data: '12/01/2023', hora: 'Boron', valor: '10.811', moedaEscolhida: 'B', moedaConvertida: 'USD', resultado: '12455', valorDolar: '222', taxa: 5555, acao: ''},
];


@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<HistoricoMoeda>;



  constructor () {
  }

  displayedColumns: string[] = ['data', 'hora', 'valor', 'moedaEscolhida','moedaConvertida', 'resultado', 'taxa', 'acao']
  dataSource = new MatTableDataSource(CONVERSAO_DADOS);
  data: HistoricoMoeda[] = CONVERSAO_DADOS;
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  connect(): Observable<HistoricoMoeda[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  private getPagedData(data: HistoricoMoeda[]): HistoricoMoeda[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }


  private getSortData(data: HistoricoMoeda[]): HistoricoMoeda[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'hora': return compare(a.hora, b.hora, isAsc);
        case 'resultado': return compare(+a.resultado, +b.resultado, isAsc);
        default: return 0;
      }
    });
  }



  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
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




