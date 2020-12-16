import { MapLocationService } from './shared/components/map-location/map-location.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  title = 'CorporateMobile';

  constructor(private mapLocationService: MapLocationService) {}

  ngOnInit(): void {
    this.mapLocationService.watchPosition();
  }

}
