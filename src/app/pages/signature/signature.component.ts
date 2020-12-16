import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SignaturePad } from 'ngx-signaturepad/signature-pad';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements AfterViewInit {

  @ViewChild(SignaturePad, { static: false }) signaturePad: SignaturePad;

  public signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'canvasWidth': 500,
    'canvasHeight': 300
  };

  result: string;

  constructor() { }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    this.result = this.signaturePad.toDataURL();
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    this.result = 'begin drawing';
  }

  clear() {
    this.signaturePad.clear();
    this.result = '';
  }

}
