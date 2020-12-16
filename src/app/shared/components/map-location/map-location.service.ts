import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapLocationService {

  constructor() { }

  watchPosition() {
    if (!navigator.geolocation) {
      console.log('Localization not supported!');
      return;
    }

    let desLat = 0;
    let desLon = 0;

    const id = navigator.geolocation.watchPosition((position) => {
      console.log(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude} `);
      if (position.coords.latitude === desLat) {
        navigator.geolocation.clearWatch(id);
      }
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
