import { Component } from '@angular/core';
import { Todo } from './models/todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  constructor(private todoService: TodoService) { }

  update(todo: Todo) {
    this.todoService.updateTodo(todo);
  }
}
