import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTodoPage } from '../add-new-todo/add-new-todo.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList: any = []

  today: number = Date.now();

  constructor(public modalControl: ModalController) {}

  async addTodo() {
    const modal = await this.modalControl.create({
      component: AddNewTodoPage,
    });

    modal.onDidDismiss().then((newTodoObject) => {
      this.todoList.push(newTodoObject.data)
    });
    return await modal.present();
  }
}
