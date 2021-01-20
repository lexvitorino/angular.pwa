import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {

  private db: Dexie;
  private table: Dexie.Table<FakeTableModel, any> = null;

  constructor() {
    this.init();
  }

  private init() {
    this.db = new Dexie('db-objects');
    this.db.version(1).stores({
      fakeTable: 'id'
    });
    this.table = this.db.table('fakeTable');
  }

  async getList() {
    try {
      const fakeTables: FakeTableModel[] = await this.table.toArray();
      return fakeTables;
    } catch (error) {
      console.log('DataBase Offline Not Resolved', error);
    }
  }

  async add(data: FakeTableModel) {
    await this.table.add(data);
  }

  async delete(id) {
    await this.table.delete(id);
  }

  async syncDb() {
    try {

      const fakeTablesOn = JSON.parse(localStorage.getItem('data-storage')) as FakeTableModel[];
      const fakeTablesOff = await this.getList();

      fakeTablesOff.forEach(data => {
        fakeTablesOn.push(data);
        this.delete(data.id);
      });

      localStorage.setItem('data-storage', JSON.stringify(fakeTablesOn));

    } catch (error) {
      console.log('DataBase Offline Not Resolved', error);
    }
  }

}

export class FakeTableModel {
  id: number;
  name: string;
  age: number;
}
