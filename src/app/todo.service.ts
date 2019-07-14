import { Injectable } from '@angular/core';
import { Todo } from './models/todo.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoItems: Todo[] = [];
  private todoUpdated = new Subject<Todo[]>();

  constructor() { }

  public updateTodo(todo: Todo): Todo {

    let result: Todo;
    if (todo.id === null) {
      todo.id = new Date().getTime();
      this.todoItems.push({...todo});
      this.todoUpdated.next(...[this.todoItems]);
      result = todo;
    } else {
      this.todoItems.forEach(item => {
        if (item.id === todo.id) {
          item.color = todo.color;
          item.title = todo.title;
          item.description = todo.description;
          item.isCompleted = todo.isCompleted;
          this.todoUpdated.next(...[this.todoItems]);
          result = item;
        }
      });
    }

    return {...result};
  }

  public markAsCompleted(todo: Todo) {

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.todoItems.length; i++) {
      if (this.todoItems[i].id === todo.id) {
        this.todoItems[i].isCompleted = true;
        break;
      }
    }
    this.todoUpdated.next(...[this.todoItems]);
  }

  public deleteTodo(todo: Todo) {
    const idx = this.todoItems.findIndex(item => todo.id === item.id );
    this.todoItems.splice(idx, 1);
    this.todoUpdated.next(...[this.todoItems]);
  }

  public getTodoUpdatedListener() {
    return this.todoUpdated.asObservable();
  }
}
