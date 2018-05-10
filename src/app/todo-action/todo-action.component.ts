import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITodo} from "../interface/interfaces"
@Component({
  selector: 'app-todo-action',
  templateUrl: './todo-action.component.html',
  styleUrls: ['./todo-action.component.css']
})
export class TodoActionComponent implements OnInit {

  @Input() todo:ITodo[]

  @Output() res = new EventEmitter<any>();

  constructor() {
  }

  checkTask(element:HTMLInputElement){
    element.checked? this.todo[element.id].done = true : this.todo[element.id].done = false;
    console.log(this.todo[element.id]);
    this.res.emit(this.todo)
  }

  clearList() {
    console.log("in filter")
    this.todo = this.todo.filter(v=>v.done==false)
    this.res.emit(this.todo);
  }

  updateList() {
    this.res.emit(this.todo);
  }

  ngOnInit() {
  }

}
