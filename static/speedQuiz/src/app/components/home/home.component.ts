import { Component, OnInit } from '@angular/core';

import { AutenticacioService } from 'src/app/serveis/autenticacio/autenticacio.service';
import { DadesUsuari } from 'src/app/classes/dadesUsuari';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private autenticacioService: AutenticacioService) { }

  ngOnInit() {
    this.getDadesUsuari();
  }

  usuari: DadesUsuari;

  getDadesUsuari() {
    this.autenticacioService.getDadesUsuari().subscribe((usuari) => {
      this.usuari = usuari;
    });
  }

}
