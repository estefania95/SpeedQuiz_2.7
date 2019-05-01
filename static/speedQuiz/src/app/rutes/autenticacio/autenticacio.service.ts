import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { DadesUsuari, dadesUsuari } from '../../classes/dadesUsuari';
import { DadesAutenticacio, dadesAutenticaio } from '../../classes/dadesAutenticacio';

@Injectable({
  providedIn: 'root'
})
export class AutenticacioService {

  constructor(private http: HttpClient) { }

  private url:string = 'https://localhost/api/';

  getDadesUsuari(): Observable<DadesUsuari> {
    return of(dadesUsuari);
  }
  /*
  registrar-se(usuari: DadesAutenticacio): Observable<any> {

    return this.http.post<DadesAutenticacio>()
  }
  
  iniciarSessio(usuari: DadesAutenticacio): Observable<any> {

    return this.http.post<DadesAutenticacio>()
  }
  */

}
