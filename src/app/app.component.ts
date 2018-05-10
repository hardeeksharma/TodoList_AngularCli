import {Component} from '@angular/core';
import {ITodo} from "./interface/interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: ITodo[];

  constructor() {
    this.todoList = [];
  }

  update(arr) {
    this.todoList = arr;
    console.log(this.todoList);
  }

}
