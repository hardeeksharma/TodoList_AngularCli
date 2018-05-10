import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITodo} from "../interface/interfaces";
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() todo
  @Output() res = new EventEmitter<any>();
  add(item: string) {
    let taskObject:ITodo = {
      task:item,
      done:false
    }
    this.todo.push(taskObject)
    this.res.emit(this.todo)
    console.log(this.todo)
  }


}
