import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Pregunta } from 'src/app/classes/pregunta';
import { JocService } from 'src/app/serveis/joc/joc.service';

@Component({
  selector: 'app-taulell-preguntes',
  templateUrl: './taulell-preguntes.component.html',
  styleUrls: ['./taulell-preguntes.component.scss']
})
export class TaulellPreguntesComponent implements OnInit {

  constructor(private jocService: JocService) { }

  ngOnInit() {
    this.getPreguntes();
    this.actualitzarIndex();
  }

  @Output() preguntesTotals = new EventEmitter();
  @Output() preguntaCorecte = new EventEmitter();
  preguntes: Pregunta[];
  preguntaActual: Pregunta;
  index: number;

  getPreguntes() { this.jocService.getPreguntes().subscribe( preguntes => this.preguntes = preguntes ); }
  setResposta(idResposta: String) {/*
    let r =
    {
      idPregunta: this.preguntaActual.id,
      idResposta: idResposta
    }
    this.jocService.setResposta(r).subscribe( response => { this.actualitzarIndex(response.isCorrecte) } );*/

    this.actualitzarIndex(true);
  }
  actualitzarIndex(isCorrecte?: Boolean) {
    if(this.index == undefined){ this.index = 0 }
    else{ this.index++ }

    if(this.index < this.preguntes.length-1) this.preguntaActual = this.preguntes[this.index];

    this.preguntesTotals.emit([this.index+1, this.preguntes.length])
    if(isCorrecte){ this.preguntaCorecte.emit(isCorrecte) }
  }
}
