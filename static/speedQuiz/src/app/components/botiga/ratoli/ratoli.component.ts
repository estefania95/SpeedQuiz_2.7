import { Component, OnInit, Input } from '@angular/core';

import { Skin } from 'src/app/classes/skin';
import { BotigaService } from 'src/app/serveis/botiga/botiga.service';

@Component({
  selector: 'app-ratoli',
  templateUrl: './ratoli.component.html',
  styleUrls: ['./ratoli.component.scss']
})
export class RatoliComponent implements OnInit {

  constructor(private botigaService: BotigaService) { }

  ngOnInit() {
    this.skin.nomFitxer = 'assets/imatges/components/skins/' + this.skin.nomFitxer;
  }

  comprar = true;
  @Input() skin: Skin;

  posarOcomprar() {
    this.botigaService.setSkin(this.skin.id).subscribe( res => console.log(res));
  }
}
