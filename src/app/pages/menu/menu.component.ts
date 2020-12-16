import { EventEmitterService } from './../../shared/services/event-emitter.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  title = 'Menu';
  activeCam = false;

  constructor(
    public titleService: Title
  ) {
    titleService.setTitle(`CorporateMobile | ${this.title}`);
  }

  ngOnInit() {
  }

}
