import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './ghansham/main/main.component';
import { NpComponent } from './ghansham/np/np.component';
import { StudentComponent } from './ghansham/student/student.component';
import { StudentItemComponent } from './ghansham/student-item/student-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NpComponent,
    StudentComponent,
    StudentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
