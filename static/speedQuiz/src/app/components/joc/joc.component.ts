import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joc',
  templateUrl: './joc.component.html',
  styleUrls: ['./joc.component.scss']
})
export class JocComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.respostes = ['resposta 1', 'resposta 2', 'resposta 3', 'resposta 4'];
    this.isCorrecte = true;
    this.textCorrecte = (this.isCorrecte) ? 'Correcte' : 'Incorrecte'
  }

  respostes
  isCorrecte
  textCorrecte
}
