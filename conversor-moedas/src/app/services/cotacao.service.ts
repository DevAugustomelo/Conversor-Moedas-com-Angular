import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoedasList } from '../componentes/moedasList';






@Injectable({
  providedIn: 'root'
})
export class CotacaoService {

  private readonly API = 'https://api.exchangerate.host/symbols';

  
  constructor(private http: HttpClient) { }
  
  listar() {
    return this.http.get<any>(this.API)
  }



}
// fetchApi = async () => {

//   try {
//     const resposta = await fetch(this.API)
//   } catch (error) {
    
//   }
  
// }
