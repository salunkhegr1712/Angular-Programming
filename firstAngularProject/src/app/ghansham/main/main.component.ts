import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

// now first import todos list 
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  todos:Todo[];
  constructor(){
    this.todos=[{
      sn:1,
      title:"work 1",
      desc:"code"
    },
    {
      sn:2,
      title:"Learn",
      desc:"Udemy"
    },
    {
      sn:3,
      title:"Eat food",
      desc:"Eat mill"
    },
    ]
  }
  todoupdate(todo:Todo){
    console.log(todo.sn)
    // we got the to do which we want to delete so lets delete it 
    // find index 
    const i=this.todos.indexOf(todo)
    this.todos.splice(i,1)
  }


  
}
