import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/modules/material.module';
import { CotacaoService } from 'src/app/services/cotacao.service';

import { ConversorComponent } from './conversor.component';






describe(ConversorComponent.name, () => {
  let conversor: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;



  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [
        ConversorComponent,

      ],
      imports:[
        HttpClientModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule

      ],
      providers: [CotacaoService]
      
    })
    .compileComponents();


    fixture = TestBed.createComponent(ConversorComponent);
    conversor = fixture.componentInstance;
    
  });



  it('Deveria criar o Componente Conversor', ()=> {
    expect(conversor).toBeTruthy();
  });


  it(`# ${ConversorComponent.prototype.getDescricao.name} 
  Deveria retornar a descrição da moeda tendo o código da moeda como parâmetro`, () => {
    
    let list = [{
      code: 'USD', description: 'United States Dollar'}]
    let desc = conversor.getDescricao('USD', list);
    let retorno = 'United States Dollar'
    fixture.detectChanges();

    expect(desc).toBe(retorno);
  });


  it(`# ${ConversorComponent.prototype.formatarValor.name} 
  Deveria retornar o valor em formato de moeda tendo como parâmetros o valor a ser formatado e o código da moeda`,
  () => {

    let formatar = conversor.formatarValor(1200000, 'BRL')

    let retorno = 'R$ 1.200.000,00'
    fixture.detectChanges();
    
    expect(formatar).toBe(retorno);

  });


});
