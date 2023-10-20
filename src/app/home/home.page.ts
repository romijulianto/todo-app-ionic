import { Component } from '@angular/core';

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

  constructor() {}
}
