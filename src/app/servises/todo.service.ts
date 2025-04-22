import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}
}
private todos: string[] = [];

addTask(task: string) {
  this.todos.push(task)
 }

getTask(): string[] {
  return this.todos;
}

removeTask(index: number) {
  this.todos.splice(index, 1);
}

clearTask() {
  this.todos[];
}