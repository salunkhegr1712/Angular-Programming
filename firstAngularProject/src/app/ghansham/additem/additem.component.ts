import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/todo';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})

export class AdditemComponent {
  @Output() additem:EventEmitter<Todo>=new EventEmitter();
  title=""
  description=""
  i=3
  
  onSubmit(){
    this.i=this.i+1
    const entry={
      sn:this.i,
      title:this.title,
      desc:this.description,
      check:true
    }
    console.log(this.title,this.description)
    this.additem.emit(entry)
  }
}
