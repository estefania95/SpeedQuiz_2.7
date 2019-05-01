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
    return this.http.get<DadesPuntuacio[]>(this.url);
  }
}
