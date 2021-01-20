import { IndexedDBService } from './indexed-db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indexed-db',
  templateUrl: './indexed-db.component.html'
})
export class IndexedDBComponent implements OnInit {

  name: any;
  email: any;

  constructor(
    private indexedDB: IndexedDBService
  ) { }

  ngOnInit() {
    this.indexedDB.getData("name", (name: string) => this.name = name);
    this.indexedDB.getData("email", (email: string) => this.email = email);
  }

}
