import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../../models/todo';
import { todoArr } from '../../const/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @ViewChild("ti") ti !: ElementRef;
  todoData = todoArr;
  onTodoClick(){
    let obj = {
      todoItem : this.ti.nativeElement.value,
      id : this.uuid()
    }
    console.log(obj);
    todoArr.push(obj)
   
  }

  constructor() { }

  ngOnInit(): void {
  }

  uuid(){
    return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;

        return value.toString(16);
    });
};

}
