import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { DadesPuntuacio } from '../../classes/dadesPuntuacio';

@Injectable({
  providedIn: 'root'
})
export class PuntuacioService {

  constructor(private http: HttpClient) { }

  private url:string = 'https://localhost/api/puntuacio';

  getDadesPuntuacio(): Observable<DadesPuntuacio[]> {

    let dadesP: DadesPuntuacio[] = [
      {titol: 'Formatges totals', score: 50},
      {titol: 'Formatgets totals', score: 500},
      {titol: 'Partides guanyades', score: 10},
      {titol: 'Partides perdudes', score: 5},
      {titol: 'Partides jugades', score: 0}
    ];

    return of(dadesP);

    //return this.http.get<DadesPuntuacio[]>(this.url);
  }
}
