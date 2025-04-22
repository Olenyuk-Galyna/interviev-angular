import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight.directive';
import { TrancatePipe } from '../../pipe/trancate.pipe';
import { TodoService } from '../../servises/todo.service';

@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule, HighlightDirective, TrancatePipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent implements OnInit {
  new task: string = '';
  task: string[] = [];

constructor() { }

priwate todoService = inject(TodoService);

ngOnInit() {
  this.task = this.todoService.getTask();
}

addTask() {
  if (this.newTask.trim()! == '') {
    this.todoSevice.addTask(this.newTask.trim());
    this.newTask = '';
    this.update();
  }
}

}

export class TestComponent {
  title = 'Це інтерполяція';
  firstName = 'Галина';
  lastName = 'Оленюк';

  isEnabled: boolean = true;

  isActiv: boolean = true;
  isDisabled: boolean = false;

  isClickedState: boolean = false;

  inputText: string = '';

  users = ['Alina', 'Ivan', 'Serhii', 'Diana'];

  items = [
    { id: 1, name: 'Яблуко' },
    { id: 2, name: 'Банан' },
    { id: 3, name: 'Апельсин' },
    { id: 4, name: 'Ківі' },
    { id: 5, name: 'Виноград' },
  ];

  appState = 'activ';

  today = new Date();
  longText = 'Дуже довгий текст, який неохідно обрізати';

  @Input() childMessage: string = '';
  @Output() messageFromChild = new EventEmitter<string>();
  getFullName() {
    return `Мене звуть ${this.firstName} ${this.lastName}`;
  }

  toggleState() {
    this.isClickedState = true;
  }

  sendMessageToParent() {
    this.messageFromChild.emit('Я твій син');
  }
}
