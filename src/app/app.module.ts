import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExamPageModule } from './exam-page/exam-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExamPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
