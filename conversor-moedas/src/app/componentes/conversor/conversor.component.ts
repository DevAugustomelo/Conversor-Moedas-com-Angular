import { Component, OnInit } from '@angular/core';
import { CotacaoService, listarMoedas } from 'src/app/services/cotacao.service';
import { MoedasList } from '../moedasList';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { getConversao } from '../historico/historico.component';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css'],
})
export class ConversorComponent implements OnInit {
  // moedasLi: MoedasList[] = listarMoedas();
  moedasLi: MoedasList[] = [];
  myControl = new FormControl<string | MoedasList>('');
  options: MoedasList[] = this.moedasLi;
  filteredOptions!: Observable<MoedasList[]>;
  
  moedaDe = 'USD';
  moedaPara = '';
  valorEscolhido = '1';
  valorConvertido = '';
  valorDolar = ''
  taxa = 0;
  descDe = ''
  descPara = ''
  
  constructor(private service: CotacaoService) {}
  
  ngOnInit(): void {
    this.service.listar()
    .subscribe(moeda => {this.moedasLi = Object.values(moeda.symbols)
      
      
    });

    
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
                  let valor = resp["result"].toFixed(2);
                  this.valorConvertido = this.formatarValor(valor, this.moedaPara);
                  this.valorEscolhido = this.formatarValor( parseFloat(this.valorEscolhido), this.moedaDe);
                  this.taxa = resp["info"].rate;
                  
                  this.service.cotacao(this.moedaPara, 'USD', valor).subscribe(dolar => {
                    this.valorDolar = dolar["result"];
                    // console.log(this.valorDolar); 

                    getConversao(
                      this.valorEscolhido,
                      this.moedaDe,
                      this.moedaPara,
                      this.valorConvertido,
                      this.taxa,
                      this.valorDolar 
                    )
                  }); 
                    
                })
                
                this.descDe = this.getDescricao(this.moedaDe, this.descDe);
                this.descPara = this.getDescricao(this.moedaPara, this.descPara);
  }


  getDescricao(code: string, destino:string) {
    
    this.moedasLi.find(valor => {
      if(valor.code == code){
        destino = valor.description;
        }
      });

      return destino     
  }


  formatarValor(valor:number, moedaCode:string): string {

    let formatacao =  new Intl.NumberFormat('pt-br', {style: 'currency', currency: `${moedaCode}`}).format(valor);

    return formatacao
  }

}

