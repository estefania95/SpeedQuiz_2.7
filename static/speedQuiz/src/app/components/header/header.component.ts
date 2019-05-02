import { Component, OnInit, OnChanges, DoCheck, Input, SimpleChanges } from '@angular/core';
import { DadesUsuari } from 'src/app/classes/dadesUsuari';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit() { }
  ngDoCheck() {
    if(this.dadesUsuari.formatgets > 3){
      this.dadesUsuari.formatges++;
      this.dadesUsuari.formatgets = this.dadesUsuari.formatgets % 4;
    }
  }

  @Input() fletxaVisible:Boolean = false;
  @Input() dadesUsuari: DadesUsuari;
}
