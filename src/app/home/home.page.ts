import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTodoPage } from '../add-new-todo/add-new-todo.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList = [
    {
      itemName: 'Coding',
      itemDueDate: '10-23-23',
      itemPriority: 'high',
      itemCategory: 'Work',
    },
    {
      itemName: 'Design',
      itemDueDate: '10-23-23',
      itemPriority: 'low',
      itemCategory: 'Work',
    },
    {
      itemName: 'Shopping',
      itemDueDate: '10-25-23',
      itemPriority: 'middle',
      itemCategory: 'Personal',
    },
    {
      itemName: 'Learning',
      itemDueDate: '10-26-23',
      itemPriority: 'middle',
      itemCategory: 'Personal',
    },
  ];

  today: number = Date.now();

  constructor(
    public modalControl: ModalController
  ) {}

  async addTodo() {
    const modal = await this.modalControl.create({
      component: AddNewTodoPage
    })
    return await modal.present()
  }
}
