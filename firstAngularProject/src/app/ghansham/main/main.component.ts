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
  i=3
  m=true
  // so at start check and get all stored data 
  localsaved=localStorage.getItem("todos")
  todos:Todo[];
  constructor(){
    if(this.localsaved==null){
      this.todos=[]
    }
    else{
      this.todos=JSON.parse(this.localsaved)
    }
  }
  todoupdate(todo:Todo){
    this.i=this.i-1
    console.log(todo.sn)
    // we got the to do which we want to delete so lets delete it 
    // find index 
    const i=this.todos.indexOf(todo)
    this.todos.splice(i,1)
    // make chnges save locally 
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

  todoadd(todo:Todo){
    console.log(todo)
    this.todos.push(todo)

    // save changes locally 
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  
  updateDataset(todo:Todo){
    if(todo.check==true){
      this.m=true
      todo.check=false
      const z=this.todos.indexOf(todo)
      this.todos[z].check=this.m
      console.log(this.todos[z])
    }
    else{
      this.m=false
      todo.check=true
      const z=this.todos.indexOf(todo)
      this.todos[z].check=this.m
      console.log(this.todos[z])
    }
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
    
}
