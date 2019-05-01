import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Skin, skins } from 'src/app/classes/skin';

@Injectable({
  providedIn: 'root'
})
export class BotigaService {

  constructor(private http: HttpClient) { }

  private url:string = 'https://localhost/api/botiga';

  getSkins(): Observable<Skin[]> {

    return of(skins);

    return this.http.get<Skin[]>(this.url);
  }

  setSkin(idSkin: String): Observable<any> {
    
    return this.http.post(this.url, idSkin);
  }
}
