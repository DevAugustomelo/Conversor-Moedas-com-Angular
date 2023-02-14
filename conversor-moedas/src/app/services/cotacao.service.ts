import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, of } from 'rxjs';
import { ErrorComponent } from '../shared/error/error.component';




@Injectable({
  providedIn: 'root',
})
export class CotacaoService {
  private readonly API = 'https://api.exchangerate.host/symbols';

  constructor(
    private http: HttpClient,
    public dialog: MatDialog
    ) {}


  listar() {
    return this.http.get<any>(this.API).pipe(
      catchError(erro => {
        this.openError('Não foi possível carregar os dados do servidor.')
        return of(['#err'])
      })
    )
  }


  cotacao(de:string, para:string, quantidade:string) {
    const request = `https://api.exchangerate.host/convert?from=${de}&to=${para}&amount=${quantidade}`;

    return this.http.get<any>(request).pipe(
      catchError(erro => {
        this.openError('Erro ao receber dados da API.')
        return of([])
      })
    )

  }

  openError(erroMsg: string) {
    this.dialog.open(ErrorComponent, {
      data: erroMsg
    });
  }

  
}


export function listarMoedas() {
  let lista: any[] = [];

  var requestURL = 'https://api.exchangerate.host/symbols';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function () {
    var response = Object.values(request.response.symbols);
    // console.log(response);
    response.forEach((item) => {
      lista.push(item);
    });
  };
  return lista
}
