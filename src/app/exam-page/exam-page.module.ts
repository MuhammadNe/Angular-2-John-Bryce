import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionDisplayComponent } from './question-display/question-display.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { CountDownComponent } from './count-down/count-down.component';
import { ExamRootComponent } from './exam-root/exam-root.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ExamRootComponent],
  declarations: [QuestionDisplayComponent, QuestionListComponent, CountDownComponent, ExamRootComponent]
})
export class ExamPageModule { }
