import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-np',
  templateUrl: './np.component.html',
  styleUrls: ['./np.component.css']
})
export class NpComponent {

  @Input() todo:Todo;
  // we are creating a event 
  @Output() tododelete: EventEmitter<Todo>= new EventEmitter();
  constructor(){
    this.todo=Input();
  }
  onClick(todo:Todo){
    // this is a event 
    this.tododelete.emit(this.todo)
    console.log("you clicked delete button")

  }
}
