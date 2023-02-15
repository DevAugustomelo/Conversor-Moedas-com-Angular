import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import {  HistoricoMoeda } from '../historico.component';

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


  @Output() deletarEvent: EventEmitter<any> = new EventEmitter();



  constructor(
    private router: Router,
  ) {}

  
  

  excluir() {
    this.deletarEvent.emit()
    this.router.navigate(['/historico'])
  }


  onDeletar() {
    alert('componente acoes!!!')
  }


  cancelar() {
    this.router.navigate(['/historico'])
  }

}
