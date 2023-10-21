import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewTodoPage } from './add-new-todo.page';

describe('AddNewTodoPage', () => {
  let component: AddNewTodoPage;
  let fixture: ComponentFixture<AddNewTodoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddNewTodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
