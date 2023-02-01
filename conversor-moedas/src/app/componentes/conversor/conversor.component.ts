import { Component, OnInit } from '@angular/core';
import { CotacaoService } from 'src/app/services/cotacao.service';
import { MoedaComponent } from '../moeda/moeda.component';
import { MoedasList } from '../moedasList';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {


  


  constructor(private service: CotacaoService) {}


  moeda = '';
  // moedasList: MoedasList[] = [];


  moedasLi: any[] = []
    // {
    //   code:'EUR',
    //   description: 'euro'
    // },

    // {
    //   code: 'USD',
    //   description: 'dolar'
    // }
    
    // ];
  moedaDe = "";
  moedaPara ="";


  ngOnInit() {
    this.service.listar().subscribe(moeda =>{
      this.moedasLi = Object.values(moeda.symbols);
        console.log(this.moedasLi);
      
      // this.moedasLi.push(resposta)
      // console.log(this.moedasLi)
    })
  }



}
