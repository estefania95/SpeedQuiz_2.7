import { Component, OnInit, Input } from '@angular/core';
import { DadesUsuari } from 'src/app/classes/dadesUsuari';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  @Input() fletxaVisible:Boolean = false;
  @Input() dadesUsuari:DadesUsuari;
}
