import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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
  taskObject: any = [];

  constructor(public modalControl: ModalController) {}

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

    this.dismis();
  }
}
