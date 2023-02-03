import { Component, OnInit } from '@angular/core';
import { CotacaoService, listarMoedas } from 'src/app/services/cotacao.service';
import { MoedaComponent } from '../moeda/moeda.component';
import { MoedasList } from '../moedasList';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {


  
  moeda = '';
  // moedasLi: MoedasList[] = listarMoedas()
  moedasLi: any[] = []
  
  moedaDe = "";
  moedaPara ="";
  

  constructor(private service: CotacaoService) {}

  
  ngOnInit(): void {
    this.service.listar()
    .subscribe(moeda => this.moedasLi = Object.values(moeda))
    console.log(this.moedasLi)
  }
  
  
  
}
