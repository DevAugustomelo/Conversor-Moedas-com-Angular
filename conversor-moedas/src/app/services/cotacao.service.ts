import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



import { Observable } from 'rxjs';
import { MoedasList } from '../componentes/moedasList';





@Injectable({
  providedIn: 'root',
})
export class CotacaoService {
  private readonly API = 'https://api.exchangerate.host/symbols';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any>(this.API);
  }

  cotacao(de:string, para:string, quantidade:number) {
    const request = `https://api.exchangerate.host/convert?from=${de}&to=${para}&amount=${quantidade}`;

    return this.http.get<any>(request)

    

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
