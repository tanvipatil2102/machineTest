import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './shared/components/todo/todo.component';
import { StudentComponent } from './shared/components/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
