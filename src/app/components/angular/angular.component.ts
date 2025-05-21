import { CommonModule } from '@angular/common';
import { Component,
  // WritableSignal, effect, signal,
  OnInit } from '@angular/core';
// import { QUESTIONS } from '../../constants';

// import { Observable, from, of } from 'rxjs';

import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-angular',
  standalone: true;
  imports: [CommonModule,
    // TestComponent
  ],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss'
})
// export class AngularComponent {
//   questions: WritableSignal<any[]> = signal(QUESTIONS);
// }

// constructor() {
//   effect(() => {
//     console.log(`Updated Questions: ${JSON.stringify(this.questions)}`);
//   })

//   setTimeout(() => this.addQuestionOnce(), 5000);

//   addQuestionOnce() {
//     const newQuestion = {
//       number: this.questions().length + 1,
//       question: `New question ${this.questions().length + 1}`,
//       difficulty: 'Easy',
//     }
//     this.questions.set([...this.questions(), newQuestion]);
//   }
// }

export class AngularComponent implements OnInit {

  // // Створення Observable, який генерує одне значення і завершується
  // observableFirst = new Observable(subscriber => {
  //   subscriber.next('Привіт з RxJS');
  //   subscriber.complete();
  // })

  // // Створення  Observable за допомогою оператора of
  // observableSecond = of('Перше значення', 'Друге значення', 'Третє значення');

  // // Створення Observable з допомогою оператора from
  // observableThird = from(['Перше значення', 'Друге значення', 'Третє значення']);

  // // Створення Observable з масиву чисел за допомогою оператора from
  // observableForth = from([1, 2, 3]);

  // observableFifth = new Observable<string>(subscriber => {
  //   subscriber.next('Початок потоку');
  //   subscriber.next('Обробка даних');
  //   subscriber.error('Помилка. Щось пішло не так!');
  //   subscriber.next('Це значення не буде відправлене');
  //   subscriber.complete();
  // });

  // ngOnInit(): void {
    
  //   // Підписка на observableFirst
  //   this.observableFirst({
  //     next: (value) => console.log('Значення observableFirst:', value);
  //     error: (err) => console.error('Помилка:', err);
  //     complete: () => console.log('observableFirst завершено')
  //   });

  //   // Підписка на observableSecond
  //   this.observableSecond.subscribe({
  //     next: (value) => console.log('Значення observableSecond:', value);
  //     complete: () => console.log('Завершено');
  //   });

  //   // Підписка на observableThird
  //   this.observableThird.subscribe({
  //     next: (value) => console.log('Значення observableThird:', value);
  //     complete: () => console.log('Завершено');
  //   });

  //   // Проста підписка з використання стрілкової функції
  //   this.observableForth.subscribe(value => console.log('Значення observableForth:', value));

  //   // Підписка на Observable
  //   this.observableFifth.subscribe({
  //     next: (value) => console.log('Значення observableFifth:', value);
  //     error: (err) => console.error('Обробка помилки observableFifth:', err);
  //     complete: () => console.log('observableFifth завершено')
  //   })
  // }

  // Створення Subject
  subjectFirst = new Subject<number>();

  // Отримання Observable з Subject
  observable = this.subjectFirst.asObservable();

  // Створення BehaviorSubjact з початковим значенням
  behaviorSubject = new BehaviorSubject<number>(0);

// Створення ReplaySubject, який зберігає останні 2 значення 
  replaySubject = new ReplaySubject<number>(2);

  // Створення AsyncSubject
  asyncSubject = new AsyncSubject<number>();

  ngOnInit(): void {

  //   // Subject продукую перше значення
    //   this.subjectFirst.next(1);
    //  В Observable не можемо викликати метод next, тому що одлазу отримаємо помилку 
  //   this.observable.next();

  //   // Підписка першого споживача на Subject
  //   this.subjectFirst.subscribe({
  //     next: (value) => console.log('Підписник 1:', value);
  //     error: (err) => console.error('Підписник 1, помилка:', err);
  //     complete: () => console.log('Підписник 1 завершено')
  //   });

  // // Subject продукую друге значення
  //   this.subjectFirst.next(2);

  //   // Підписка другого споживача на Subject
  //   this.subjectFirst.subscribe({
  //     next: (value) => console.log('Підписник 2:', value);
  //     error: (err) => console.error('Підписник 2, помилка:', err);
  //     complete: () => console.log('Підписник 2 завершено')
  //   });


  //   // Subject продукую третє значення
  //   this.subjectFirst.next(3);

  //   // Subject завершується
  //   this.subjectFirst.complete();


    // // BehaviorSubject
    // this.behaviorSubject.subscribe(value => console.log('Підписник 1:', value));

    // // Випуск нових значень
    // this.behaviorSubject.next(1);
    // this.behaviorSubject.next(2);

    // // Другий підписник, який отримає значення (2) відразу після підписки
    // this.behaviorSubject.subscribe(value => consol.log('Підписник (2):', value));

    // // Випуск кінцевого значення
    // this.behaviorSubject.next(3);

    // // Завершення BehaviorSubject
    // this.behaviorSubject.complete();

    // // ReplaySubject
    
    // // Випуск значень
    // this.replaySubject.next(1);
    // this.replaySubject.next(2);
    // this.replaySubject.next(3);

    // // Підписка на ReplaySubject, отримає останні два значення (2,3) відразу
    // this.replaySubject.subscribe(value => console.log('Підписник:', value));

    // // Завершення ReplaySubject
    // this.replaySubject.complete();

  // // AsyncSubject
  
  //   // Випуск значень
  //   this.asyncSubject.next(1);
  //   this.asyncSubject.next(2);
  //   this.asyncSubject.next(3);

  //   // Підписка на AsyncSubject, поки що не отримує ходних значень
  //   this.asyncSubject.subscribe(value => console.log('Підписник на asyncSubject:', value));


  //   // Випуск кінцевого значення і завершення 
  //   this.asyncSubject.next(4);
  //   this.asyncSubject.complete();
  }
}

