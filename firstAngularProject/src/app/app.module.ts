import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './ghansham/main/main.component';
import { NpComponent } from './ghansham/np/np.component';
import { StudentComponent } from './ghansham/student/student.component';
import { StudentItemComponent } from './ghansham/student-item/student-item.component';
import { AddstudentComponent } from './ghansham/addstudent/addstudent.component';
import { AdditemComponent } from './ghansham/additem/additem.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NpComponent,
    StudentComponent,
    StudentItemComponent,
    AddstudentComponent,
    AdditemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
