import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { EventEmitterService } from '../../services/event-emitter.service';

declare var $: any;
declare const L: any;

@Component({
  selector: 'app-map-location',
  templateUrl: './map-location.component.html',
  styleUrls: ['./map-location.component.css']
})
export class MapLocationComponent implements OnDestroy {

  @ViewChild('elMap', { static: false })
  private elMap: ElementRef;

  private sub;
  private listPos = [
  ];

  waiting = true;
  placa: string;
  marker: any;
  lastLat: number;
  lastLgt: number;

  /* Chave de acesso a API ***** *
     * deve ser criado uma conta no Mapbox, parar ele gerar uma chave
    */
  token = 'pk.eyJ1IjoibGV4dml0b3Jpbm8iLCJhIjoiY2tpYWZkeWg3MGFwNTJ3czNvNjI4d21vNSJ9.CR9TO5kBeJf-RGnMzMrQJQ';
  /***************************** */

  @Output() outExecute = new EventEmitter();

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.sub = EventEmitterService.get('emitMap').subscribe((placa) => {
      this.placa = placa;
      this.waiting = true;

      if (!this.elMap) {
        return;
      }

      const div = this.renderer.createElement('div');
      this.renderer.setAttribute(div, 'id', 'map');
      this.renderer.appendChild(this.elMap.nativeElement, div);

      $('#map-modal').modal('show');

      this.createMap();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  createMap() {

    this.lastLat = -23.5107193;
    this.lastLgt = -46.5053243;

    setTimeout(() => this.showMap(), 3000);
    this.setLocation();

  }

  showMap() {
    const map = L.map('map').setView([this.lastLat, this.lastLgt], 13);
    this.marker = L.marker([this.lastLat, this.lastLgt]).addTo(map);

    const tileURL = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}';

    const tileContributors = `Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors`;
    const tileLicenses = `<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>`;
    const tileImageRy = `Imagery © <a href="https://www.mapbox.com/">Mapbox</a>`;
    const tileAttribution = `${tileContributors}, ${tileLicenses}, ${tileImageRy}`;

    const tileConfig = {
      tileAttribution,
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: this.token
    };

    L.tileLayer(tileURL, tileConfig).addTo(map);

    this.waiting = false;
  }

  setLocation() {
    let i = 1;
    const interval = setInterval(() => {
      if (this.waiting) {
        return;
      }

      this.marker.setLatLng(this.listPos[i].split(','));
      this.marker.bindPopup(`<b>${this.placa}</b>`).openPopup();

      if (i === (this.listPos.length - 1)) {
        clearInterval(interval);
      }

      i++;
    }, 5000);
  }

  close() {
    $('#map-modal').modal('hide');
    document.getElementById('map').remove();
    this.outExecute.emit('');
  }

}
