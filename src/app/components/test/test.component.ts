import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule, HighlightDirective],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
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

  appState = 'activ';

  items = [
    { id: 1, name: 'Яблуко' },
    { id: 2, name: 'Банан' },
    { id: 3, name: 'Апельсин' },
    { id: 4, name: 'Ківі' },
    { id: 5, name: 'Виноград' },
  ];

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
