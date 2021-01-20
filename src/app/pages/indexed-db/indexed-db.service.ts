import { Injectable } from '@angular/core';
import { DBSchema, IDBPDatabase, openDB } from 'idb';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {

  private db: IDBPDatabase<MyDB>;

  private dbName = 'my-db';

  constructor() {
    this.connectToDb();
  }

  async connectToDb() {
    this.db = await openDB<MyDB>(this.dbName, 1, {
      upgrade(db) {
        db.createObjectStore('data-store');
      }
    });
  }

  execute(callBack?: (resp?: any) => any) {
    let db;
    const request = indexedDB.open(this.dbName);
    request.onerror = (event) => {
      console.log('Please allow my web app to use IndexedDB 😃>>>👻');
    };
    request.onsuccess = (event: any) => {
      db = event.target.result;
      callBack(db);
    };
  }

  getData(key: string, callBack?: (resp?: any) => any) {
    this.execute((db) => {
      const transaction = db.transaction(['data-store']);
      const objectStore = transaction.objectStore('data-store');
      const request = objectStore.get(key);
      request.onerror = (event) => {
        // Handle errors!
      };
      request.onsuccess = (event) => {
        // Do something with the request.result!
        callBack(request.result);
      };
    });
  }

  addData(key: string, value: string) {
    this.execute(() => {
      return this.db.put('data-store', value, key);
    });
  }

}

interface MyDB extends DBSchema {
  'data-store' : {
    key: string;
    value: string;
  }
}
