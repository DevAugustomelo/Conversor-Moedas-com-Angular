import { Component, OnInit } from '@angular/core';
import { CotacaoService, listarMoedas } from 'src/app/services/cotacao.service';
import { MoedasList } from '../moedasList';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css'],
})
export class ConversorComponent implements OnInit {
  moedasLi: MoedasList[] = listarMoedas();
  myControl = new FormControl<string | MoedasList>('');
  options: MoedasList[] = this.moedasLi;
  filteredOptions!: Observable<MoedasList[]>;
  
  moedaDe = 'USD';
  moedaPara = '';
  valorEscolhido = 1;
  valorConvertido = 0;
  taxa = 0;
  moedaDescri = ''

  constructor(private service: CotacaoService) {}

  ngOnInit(): void {
    // this.service.listar()
    // .subscribe(moeda => this.moedasLi = Object.values(moeda))
    // console.log(this.moedasLi)


    


    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const code = typeof value === 'string' ? value : value?.code;
        return code ? this._filter(code as string) : this.options.slice();
      })
    );
  }

  displayFn(moeda: MoedasList): string {
    return moeda && moeda.code ? moeda.code : '';
  }

  private _filter(name: string): MoedasList[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.code.toLowerCase().includes(filterValue)
    );
  }

  converter(): void {

    this.service.cotacao(this.moedaDe, this.moedaPara, this.valorEscolhido)
                .subscribe(resp => {
                  this.valorConvertido = resp["result"].toFixed(2);
                  this.taxa = resp["info"].rate});
                  
  }

    
}
