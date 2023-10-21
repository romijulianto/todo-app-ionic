import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.page.html',
  styleUrls: ['./add-new-todo.page.scss'],
})
export class AddNewTodoPage implements OnInit {
  categories = ['work', 'personal', 'home'];

  taskName: any;
  taskDate: any;
  taskPriority: any;
  taskCategory: any;

  constructor(public modalControl: ModalController) {}

  ngOnInit() {}

  async dismis() {
    await this.modalControl.dismiss();
  }
}
