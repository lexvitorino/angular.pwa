import { MapLocationService } from './../../shared/components/map-location/map-location.service';
import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from './../../shared/services/event-emitter.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor(
    public mapLocationService: MapLocationService
  ) { }

  ngOnInit(): void {
    this.mapLocationService.watchPosition();
  }

  openMap() {
    EventEmitterService.get('emitMap').emit("TST-1234");
  }

}
