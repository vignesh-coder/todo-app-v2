import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todoList: Todo[] = [];

  @Input()
  completed: boolean;

  constructor(private todoService: TodoService) {
    todoService.getTodoUpdatedListener().subscribe((result) => {
      this.todoList = [];
      result.forEach(e => {
        if (e.isCompleted === this.completed) {
          this.todoList.push(e);
        }
      });
    });
  }

  ngOnInit() {
  }

  trackByItems(index: number, item: Todo) {
    return item.id;
  }
}
