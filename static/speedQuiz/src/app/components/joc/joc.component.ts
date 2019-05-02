import { Component, OnInit } from '@angular/core';

import { AutenticacioService } from 'src/app/serveis/autenticacio/autenticacio.service';
import { DadesUsuari } from 'src/app/classes/dadesUsuari';
import { JocService } from 'src/app/serveis/joc/joc.service';

@Component({
  selector: 'app-joc',
  templateUrl: './joc.component.html',
  styleUrls: ['./joc.component.scss']
})
export class JocComponent implements OnInit {

  constructor(private autenticacioService: AutenticacioService, private jocService: JocService) { }

  ngOnInit() {
    this.getDadesUsuari();
    this.iniciPartida();
  }

  usuari: DadesUsuari;
  isCorrecte: Boolean;
  indexPreguntes: number[];
  formatgets: number = 0;
  idPartida: string;

  getDadesUsuari() { this.autenticacioService.getDadesUsuari().subscribe( usuari => this.usuari = usuari ); }
  preguntesTotals(indexPreguntes) { this.indexPreguntes = indexPreguntes; }
  preguntaCorecte(isCorrecte) { 
    this.isCorrecte = isCorrecte; 
    this.formatgets++;
    if(this.formatgets == this.indexPreguntes[1]) this.formatgets++; this.usuari.formatgets++; 
    
    this.usuari.formatgets++;

    if(this.indexPreguntes[0] == this.indexPreguntes[1]+1) this.fiPartida(this.idPartida);
  }
  iniciPartida(){ this.jocService.iniciPartida(); }
  fiPartida(idPartida: string){ this.jocService.fiPartida(idPartida); }
}
