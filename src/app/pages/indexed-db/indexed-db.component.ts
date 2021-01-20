import { ConnectionService } from './../../shared/services/conection.service';
import { IndexedDBService, FakeTableModel } from './indexed-db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indexed-db',
  templateUrl: './indexed-db.component.html'
})
export class IndexedDBComponent implements OnInit {

  public name: any;
  public list: FakeTableModel[] = [];
  public data: FakeTableModel = new FakeTableModel();

  constructor(
    private indexedDB: IndexedDBService,
    private connection: ConnectionService
  ) {
    this.listenStatusConnection();
  }

  async ngOnInit() {
    if (navigator.onLine) {
      this.list = JSON.parse(localStorage.getItem('data-storage')) as FakeTableModel[];
    } else {
      this.list = await this.indexedDB.getList();
    }
  }

  async onSubmit() {
    try {
      this.data.id =  this.getKey();
      this.list.push(this.data);

      if (this.connection.isOnline) {

        localStorage.setItem('data-storage', JSON.stringify(this.list));
        console.log(`I'm is online`);
      } else {

        this.indexedDB.add(this.data);
        console.log(`I'm is offline`);
      }

      this.data = new FakeTableModel();
    } catch (error) {
      console.log('DataBase Offline Not Resolved', error);
    }
  }

  private getKey(): number {
    const key = parseInt(localStorage.getItem('key')) + 1;
    localStorage.setItem('key', key.toString());
    return key;
  }

  listenStatusConnection() {
    this.connection.statusConnection.subscribe(online => {
      console.log(`Change status connection :: `, online);
      if (online) {
        this.indexedDB.syncDb();
      }
    });
  }

}
