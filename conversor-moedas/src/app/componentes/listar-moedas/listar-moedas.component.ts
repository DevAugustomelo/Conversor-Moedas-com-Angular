import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CotacaoService } from 'src/app/services/cotacao.service';




@Component({
  selector: 'app-listar-moedas',
  templateUrl: './listar-moedas.component.html',
  styleUrls: ['./listar-moedas.component.css']
})
export class ListarMoedasComponent implements OnInit {


  constructor(private service: CotacaoService) {}

  ngOnInit(): void {

    // this.service.listar().subscribe((listaMoedas) => {
    //   console.log(listaMoedas)
    // });

  }


 

}
