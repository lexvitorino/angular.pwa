import { IndexedDBService } from './../indexed-db/indexed-db.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppService } from './../../app.service';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  title = 'Menu';
  activeCam = false;
  OffLineQt = 0;
  siteStatus = "ONLINE";

  private readonly publicKey = 'BM9M9-VlY5VY47K_pdCzIx90JruMqIVY5NeKN1n0eBctXJZ5QU17VYdMTPXRh3GtQZyff6Mql4AbMvTvVlSZsdk';

  constructor(
    private titleService: Title,
    private appService: AppService,
    private indexedDB: IndexedDBService
  ) {
    titleService.setTitle(`CorporateMobile | ${this.title}`);
  }

  ngOnInit(): void {
    this.getDataList();
    this.setDataUser();
    this.getSiteStatus();
  }

  getDataList() {
    this.appService.getFakeList().subscribe(resp => {
      this.OffLineQt = resp.length;
    });
  }

  setDataUser() {
    this.indexedDB.addData('email', 'lex.vitorino@gmail.com');
    this.indexedDB.addData('name', 'Ales Sousa');
  }

  getSiteStatus() {
    addEventListener('online', (e) => {
      this.siteStatus = "ONLINE";
    });

    addEventListener('offline', (e) => {
      this.siteStatus = "OFFLINE";
    });
  }

}
