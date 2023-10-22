import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private storage: Storage) {
    this.init();
  }

  async add(key: string, value: {}) {
    this.storage.set(key, value);
  }

  async delete(key: string) {
    await this.storage.remove(key);
  }

  async update(key: string, newvalue: string) {
    await this.storage.set(key, newvalue);
    await this.getAll();
  }

  getAll() {
    let todo: any = [];
    this.storage.forEach((key, value) => {
      todo.push({
        id: value,
        value: key,
      });
    });
    return todo;
  }

  async init() {
    await this.storage.create();
  }
}
