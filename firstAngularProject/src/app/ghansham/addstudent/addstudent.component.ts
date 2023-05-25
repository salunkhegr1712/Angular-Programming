import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {

  @Output() appendNewStudent:EventEmitter<Student> = new EventEmitter();

  mis=0
  name=""
  division=0
  branch=""
  studentSubmit(){
  
      // name=this.name
      console.log(this.name)
      console.log(this.branch)
      console.log(this.mis)
      console.log(this.division)

      const entry={
        name:this.name,
        branch:this.branch,
        mis:this.mis,
        division:this.division
      }

      this.appendNewStudent.emit(entry)
  }
  
}
