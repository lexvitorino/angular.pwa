import { DialogService } from './dialog.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Dialog } from './dialog.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() config: Dialog;

  @Output() outConfirm = new EventEmitter();

  constructor(private dialog: DialogService) { }

  ngOnInit() {
    this.config = new Dialog();
  }

  confirm() {
    this.dialog.close();
    this.outConfirm.emit(true);
  }

  cancel() {
    this.dialog.close();
    this.outConfirm.emit(false);
  }

}
