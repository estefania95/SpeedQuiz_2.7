import { Component, OnInit } from '@angular/core';

import { AutenticacioService } from 'src/app/serveis/autenticacio/autenticacio.service';
import { BotigaService } from 'src/app/serveis/botiga/botiga.service';
import { DadesUsuari } from 'src/app/classes/dadesUsuari';
import { Skin } from 'src/app/classes/skin';

@Component({
  selector: 'app-botiga',
  templateUrl: './botiga.component.html',
  styleUrls: ['./botiga.component.scss']
})
export class BotigaComponent implements OnInit {

  constructor(private autenticacioService: AutenticacioService, private botigaService: BotigaService) { }

  ngOnInit() {
    this.getDadesUsuari();
    this.getSkins();
  }

  dadesUsuari: DadesUsuari;
  skins: Skin[];

  getDadesUsuari() {
    this.autenticacioService.getDadesUsuari().subscribe( usuari => this.dadesUsuari = usuari );
  }

  getSkins() {
    this.botigaService.getSkins().subscribe( skins => this.skins = skins )
  }
}
