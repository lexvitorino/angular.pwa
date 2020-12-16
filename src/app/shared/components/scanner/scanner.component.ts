import { Component, Input, Output, EventEmitter } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent {

  @Input() active = false;
  @Output() outExecute = new EventEmitter();

  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo = null;
  hasActive: boolean;
  hasDevices: boolean;
  hasPermission: boolean;
  hasResult: boolean;

  constructor() { }

  ngDoCheck() {
    this.hasActive = this.active;
  }

  onCodeResult(resultString: string): void {
    this.hasResult = !!resultString;
    if (this.hasResult) {
      this.outExecute.emit(resultString);
    }
  }

  onHasPermission(has: boolean): void {
    this.hasPermission = has;
  }

  close() {
    this.hasActive = false;
    this.outExecute.emit('');
  }

}
