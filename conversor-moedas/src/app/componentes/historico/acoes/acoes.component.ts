import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CONVERSAO_DADOS, HistoricoMoeda } from '../historico.component';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css']
})
export class AcoesComponent {

  @Input() title: string = 'EXCLUSÃO';
  @Input() msg: string = '';
  @Input() okTxt: string = 'Confirmar';
  @Input() cancelTxt: string = 'Cancelar';


  @Input() dadosConversao!: HistoricoMoeda[]

  dados = CONVERSAO_DADOS



  constructor(
    private router: Router,
  ) {}

  
  

  confirmarAcao() {

    // console.log(this.dados);
    // this.router.navigate(['/historico'])
  }


  onDeletar() {
    alert('componente acoes!!!')
  }


  cancelar() {
    this.router.navigate(['/historico'])
  }

}
