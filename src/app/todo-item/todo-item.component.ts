import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  public todoItem: Todo;

  public editMode = false;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  markAsCompleted() {
    this.todoService.markAsCompleted(this.todoItem);
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.todoItem);
  }

  editTodo() {
    this.editMode = true;
  }

  onUpdated(todo: Todo) {
    this.editMode = false;
    this.todoItem = { ...todo };
  }
}
