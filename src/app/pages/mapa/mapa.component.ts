import { Component } from '@angular/core';
import { EventEmitterService } from './../../shared/services/event-emitter.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {

  constructor() { }

  openMap() {
    EventEmitterService.get('emitMap').emit("TST-1234");
  }

}
