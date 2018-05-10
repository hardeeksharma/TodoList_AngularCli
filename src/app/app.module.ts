import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { TodoComponent } from './todo/todo.component';
import { TodoActionComponent } from './todo-action/todo-action.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoActionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
