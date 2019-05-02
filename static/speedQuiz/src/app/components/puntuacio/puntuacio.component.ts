import { Component, OnInit } from '@angular/core';

import { AutenticacioService } from '../../serveis/autenticacio/autenticacio.service'
import { PuntuacioService } from '../../serveis/puntuacio/puntuacio.service'

import { DadesUsuari } from '../../classes/dadesUsuari';
import { DadesPuntuacio } from '../../classes/dadesPuntuacio';

@Component({
  selector: 'app-puntuacio',
  templateUrl: './puntuacio.component.html',
  styleUrls: ['./puntuacio.component.scss']
})
export class PuntuacioComponent implements OnInit {

  constructor(private autenticacioService: AutenticacioService, private puntuacioService: PuntuacioService) { }

  ngOnInit() {
    this.getDadesUsuari();
    this.getPuntuacio();
  }

  usuari: DadesUsuari;
  puntuacions: DadesPuntuacio[];

  getDadesUsuari() {
    this.autenticacioService.getDadesUsuari().subscribe((usuari) => {
      this.usuari = usuari;
    });
  }
  getPuntuacio() {
    this.puntuacioService.getDadesPuntuacio().subscribe((puntuacions) => {
      this.puntuacions = puntuacions;
    });
  }
}
