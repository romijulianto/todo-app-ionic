import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.page.html',
  styleUrls: ['./add-new-todo.page.scss'],
})
export class AddNewTodoPage implements OnInit {
  categories = ['work', 'personal', 'home'];

  taskName!: string;
  taskDate!: string;
  taskPriority!: string;
  taskCategory!: string;
  taskObject: any = {};

  constructor(
    public modalControl: ModalController,
    public appService: AppService
  ) {}

  ngOnInit() {}

  async dismis() {
    await this.modalControl.dismiss(this.taskObject);
  }

  async selectedCategory(index: number) {
    this.taskCategory = this.categories[index];
  }

  async addTodo() {
    this.taskObject = {
      itemName: this.taskName,
      itemDueDate: this.taskDate,
      itemPriority: this.taskPriority,
      itemCategory: this.taskCategory,
    };

    let uid = uuidv4();
    if (uid) {
      await this.appService.add(uid, this.taskObject);
      this.dismis();
    } else {
      console.debug(uid, "can't saved empty task");
    }
  }
}
