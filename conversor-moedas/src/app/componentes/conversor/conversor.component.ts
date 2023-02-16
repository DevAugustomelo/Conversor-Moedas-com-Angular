import { Component, OnInit } from '@angular/core';
import { CotacaoService, listarMoedas } from 'src/app/services/cotacao.service';
import { MoedasList } from '../moedasList';

import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
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
  
  inputValor = new FormControl('', [Validators.required, Validators.min(1)]);
  

  constructor(private service: CotacaoService) {}
  


  ngOnInit(): void {
    this.service.listar()
    .subscribe(moeda => {this.moedasLi = Object.values(moeda.symbols)
            
    });


  }


  getErrorMessage() {
    if (this.inputValor.hasError('required')) {
      return 'Você precisa informar um número válido';
    }

    return this.inputValor.hasError('min(1)') ? '' : 'Entrada mínima deve ser igual a 1.';
  }


  converter(): void {

    //Chamada para conversão retornando o valor convertido e a taxa de conversão
    this.service.cotacao(this.moedaDe, this.moedaPara, this.valorEscolhido)
                .subscribe(resp => {
                  let valor = resp["result"].toFixed(2);
                  this.valorConvertido = this.formatarValor(valor, this.moedaPara);
                  this.valorEscolhido = this.formatarValor( parseFloat(this.valorEscolhido), this.moedaDe);
                  this.taxa = resp["info"].rate;

                  //valor das conversões em dolar                  
                  this.service.cotacao(this.moedaPara, 'USD', valor).subscribe(dolar => {
                    this.valorDolar = dolar["result"].toFixed(2);
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

                });
                
    this.descDe = this.getDescricao(this.moedaDe, this.moedasLi);
    this.descPara = this.getDescricao(this.moedaPara, this.moedasLi);
  }


  getDescricao(code: string, list: MoedasList[]) {
    let filtro: any
    filtro = list.find(valor => 
      valor.code === code
    );

    let desc = filtro.description as string

    return desc
        
  }


  formatarValor(valor:number, moedaCode:string): string {
    let formatacao =  new Intl.NumberFormat('pt-br', {style: 'currency', currency: `${moedaCode}`}).format(valor);

    return formatacao
  }

}

