import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CotacaoService } from 'src/app/services/cotacao.service';

import { ConversorComponent } from './conversor.component';






describe(ConversorComponent.name, () => {
  let conversor: ConversorComponent;
//   let fixture: ComponentFixture<ConversorComponent>;



  beforeEach(() => {

    conversor = new ConversorComponent();




    // await TestBed.configureTestingModule({
    //   declarations: [ ConversorComponent ]
    // })
    // .compileComponents();

    // fixture = TestBed.createComponent(ConversorComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it(`# ${ConversorComponent.prototype.getDescricao.name} 
  Deve retornar a descrição da moeda tendo o código da moeda como parâmetro`, () => {
    
    let desc = conversor.getDescricao('USD');
    let retorno = 'United States Dollar'

    expect(desc).toBe(retorno);
  });
});
