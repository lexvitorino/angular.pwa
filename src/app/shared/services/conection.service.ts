import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private statusConnection$ = new Subject<boolean>();

  constructor() {
    window.addEventListener('online', () => this.updateStatus());
    window.addEventListener('offline', () => this.updateStatus());
  }

  get isOnline() {
    return !!window.navigator.onLine;
  }

  get statusConnection() {
    return this.statusConnection$.asObservable();
  }

  updateStatus() {
    this.statusConnection$.next(this.isOnline);
  }

}
