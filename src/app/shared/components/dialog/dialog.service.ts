import { Dialog, DialogLeft, DialogRight } from './dialog.model';
import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private dialog: Dialog;

  constructor() { }

  setConfig(dialog: Dialog) {
    this.dialog = dialog;
  }

  setBtnLeft(btnLeft: DialogLeft) {
    this.dialog.btnLeft = btnLeft;
  }

  setBtnRight(btnRight: DialogRight) {
    if (!!btnRight) {
      this.dialog.btnRight = btnRight as DialogRight;
    }
  }

  get config(): Dialog {
    return this.dialog;
  }

  show() {
    $('#dialog-modal').modal('show');
  }

  close() {
    $('#dialog-modal').modal('hide');
  }

}
