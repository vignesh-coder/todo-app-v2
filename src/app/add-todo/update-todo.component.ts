import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  @Input()
  todoItem: Todo = {
    id: null,
    title: '',
    description: '',
    isCompleted: false,
    color: 'bg-primary',
  };

  @Output() update: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  updateTodo() {

    if (this.todoItem !== null && this.todoItem.title !== '' && this.todoItem.description !== '') {
      const obj = this.todoService.updateTodo(this.todoItem);
      this.update.emit(obj);
      this.todoItem = {
        id: null,
        title: '',
        description: '',
        isCompleted: false,
        color: 'bg-primary',
      };
    }
  }

}
