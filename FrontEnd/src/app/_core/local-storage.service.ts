import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;

  constructor() { 
    this.storage = window.localStorage;
  }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  get(key: string): string {
    return this.storage.getItem(key);
  }

  remove(key: string) {
    this.storage.removeItem(key)
  }

  reset() {
    this.storage.clear();
  }
}
