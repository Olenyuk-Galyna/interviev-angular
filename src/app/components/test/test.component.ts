import { CommonModule } from '@angular/common';
import {Component,
  // EventEmitter, inject, Input, OnInit, Output
} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
// import { HighlightDirective } from '../../directives/highlight.directive';
// import { TrancatePipe } from '../../pipe/trancate.pipe';
// import { TodoService } from '../../servises/todo.service';

@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule,
    // HighlightDirective, TrancatePipe,
    ReactiveFormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})

export class TestComponent {
  
  ageValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const isValidAge = value >= 18 && value <= 120;
    return isValidAge ? null : { ageInvalid: 'Age must be between 18 and 120' };
  }

  complexForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]);
    email: new FormControl('', [Validators.required, Validators.email]);
    age: new FormControl(null, [Validators.required, this.ageValidator]);
    password: new FormControl('', [Validators.required, Validators.minLength(6)]);
    consent: new FormControl(false, Validators.requiredTrue)
  }) 

  onSabmit() {
    console.log('Form value', this.complexForm.value);
    console.log('Form status - is valid:', this.complexForm.valid);
    console.log('Form controls:', this.complexForm.controls);
  }

  get Name() {
    return this.complexForm.get('name');
  }

  get email() {
    return this.complexForm.get('email');
  }

  get age() {
    return this.complexForm.get('age');
  }

  get password() {
    return this.complexForm.get('password');
  }
  
  get consent() {
    return this.complexForm.get('consent');
  }
}

  
// export class TestComponent implements OnInit {
  
//   ageValidator(control: AbstractControl): ValidationErrors | null {
//     const value = control.value;
//     const isValidAge = value >= 18 && value <= 120;
//     return isValidAge ? null : { ageInvalid: "Age must be between 18 and 120" };
//   }
  
  
//   new task: string = '';
//   task: string[] = [];

// constructor() { }

// priwate todoService = inject(TodoService);

// ngOnInit() {
//   this.task = this.todoService.getTask();
// }

// addTask() {
//   if (this.newTask.trim()! == '') {
//     this.todoSevice.addTask(this.newTask.trim());
//     this.newTask = '';
//     this.update();
//   }
// }

// }

// export class TestComponent {
//   title = 'Це інтерполяція';
//   firstName = 'Галина';
//   lastName = 'Оленюк';

//   isEnabled: boolean = true;

//   isActiv: boolean = true;
//   isDisabled: boolean = false;

//   isClickedState: boolean = false;

//   inputText: string = '';

//   users = ['Alina', 'Ivan', 'Serhii', 'Diana'];

//   items = [
//     { id: 1, name: 'Яблуко' },
//     { id: 2, name: 'Банан' },
//     { id: 3, name: 'Апельсин' },
//     { id: 4, name: 'Ківі' },
//     { id: 5, name: 'Виноград' },
//   ];

//   appState = 'activ';

//   today = new Date();
//   longText = 'Дуже довгий текст, який неохідно обрізати';

//   @Input() childMessage: string = '';
//   @Output() messageFromChild = new EventEmitter<string>();
//   getFullName() {
//     return `Мене звуть ${this.firstName} ${this.lastName}`;
//   }

//   toggleState() {
//     this.isClickedState = true;
//   }

//   sendMessageToParent() {
//     this.messageFromChild.emit('Я твій син');
//   }
// }
