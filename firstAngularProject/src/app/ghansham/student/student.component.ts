import { Component } from '@angular/core';
import { Student } from 'src/app/student';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  title="hello"
  localitem=localStorage.getItem("StudentDatabase")
  studentlist:Student[];
  constructor(){
      // if this.localitem is empty so we assign the list as null 
      if(this.localitem==null){
        this.studentlist=[]
      }
      else{
        this.studentlist=JSON.parse(this.localitem)
      }

  } 
  modifyData(item:Student){
    console.log(item)
    let m=this.studentlist.indexOf(item)
    this.studentlist.splice(m,1)

    // code to store and update data in local storage 
    localStorage.setItem("StudentDatabase",JSON.stringify(this.studentlist))
  }

  addStudent(item:Student){
    console.log(item)
    this.studentlist.push(item)
    // code to store the data locally 
    localStorage.setItem("StudentDatabase",JSON.stringify(this.studentlist))
  }
}
