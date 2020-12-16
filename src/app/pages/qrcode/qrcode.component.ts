import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent {

  code: any;
  activeCam: any;

  constructor() { }

  openCam() {
    this.activeCam = true;
    $('#scanner-modal').modal('show');
  }

  trataCode(event) {
    this.activeCam = false;
    this.code = event;
    $('#scanner-modal').modal('hide');
  }

}
