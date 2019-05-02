import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Pregunta, preguntes } from 'src/app/classes/pregunta';

@Injectable({
  providedIn: 'root'
})
export class JocService {

  constructor(private http: HttpClient) { }

  private url: string = 'https://localhost/api/joc';

  getPreguntes(): Observable<Pregunta[]> {

    return of(preguntes);

    return this.http.get<Pregunta[]>(this.url);
  }
  setResposta(resposta): Observable<any> {
    
    return this.http.post(this.url, resposta);
  }
  iniciPartida(): Observable<any> {

    return this.http.get(this.url);
  }
  fiPartida(dadesPartida): Observable<any> {
    
    return this.http.post(this.url, dadesPartida);
  }
}
