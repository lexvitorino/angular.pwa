import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapLocationService {

  public desLat = 0;
  public desLon = 0;
  public status = "OK";

  constructor() { }

  watchPosition() {
    if (!navigator.geolocation) {
      this.status = 'Localization not supported!';
      return;
    }

    const id = navigator.geolocation.watchPosition((position) => {
      if (position.coords.latitude === this.desLat) {
        navigator.geolocation.clearWatch(id);
      }

      this.desLat = position.coords.latitude;
      this.desLon = position.coords.longitude;
    },
    (err) => {
      console.log(err);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }
}
