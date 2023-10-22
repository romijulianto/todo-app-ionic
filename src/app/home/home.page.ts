import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTodoPage } from '../add-new-todo/add-new-todo.page';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList: any = [];

  today: number = Date.now();

  constructor(
    public modalControl: ModalController,
    public appService: AppService
  ) {
    this.getAllTodo();
  }

  async addTodo() {
    const modal = await this.modalControl.create({
      component: AddNewTodoPage,
    });

    modal.onDidDismiss().then((newTodoObject) => {
      this.getAllTodo();
    });
    return await modal.present();
  }

  async deleteTodo(key: string) {
    this.appService.delete(key)
    this.getAllTodo()
  }

  async getAllTodo() {
    this.todoList = this.appService.getAll();
    console.log(this.todoList, 'tes');
  }
}
