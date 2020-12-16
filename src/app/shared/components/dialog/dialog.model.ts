export class Dialog {
  title: string;
  message: string;
  showFooter: boolean;
  btnInvert: boolean;
  btnLeft: DialogLeft;
  btnRight: DialogRight;

  constructor() {
    this.btnInvert = false;
    this.btnLeft = new DialogLeft();
    this.btnRight = new DialogRight();
  }
}

export class DialogLeft {
  class: string;
  text: string;
}

export class DialogRight {
  class: string;
  text: string;
}
