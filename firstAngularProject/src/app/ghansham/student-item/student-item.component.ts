import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent {

  @Input() item:Student;

  // now lets create a event which will be calles when someone click on delete button 

  @Output() outputEvent: EventEmitter<Student>=new EventEmitter()
  constructor(){
    this.item=Input();
  }

  onClick(item:Student){
    this.outputEvent.emit(item)
    // console.log(item)
  }
}
