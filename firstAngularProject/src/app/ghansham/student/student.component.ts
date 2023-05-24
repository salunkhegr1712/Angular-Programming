import { Component } from '@angular/core';
import { Student } from 'src/app/student';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  title="hello"
  studentlist:Student[];
  constructor(){
    this.studentlist=[{
      name:"ghansham",
      mis:111903033,
      branch:"comp",
      division:1,
    },
    {
      name:"abhi",
      mis:11191002,
      branch:"mech",
      division:1,
    },
    {
      name:"yash",
      mis:111485122,
      branch:"extc",
      division:1,
    }  
  ]
  }
  modifyData(item:Student){
    console.log(item)
    let m=this.studentlist.indexOf(item)
    this.studentlist.splice(m,1)
  }
}
