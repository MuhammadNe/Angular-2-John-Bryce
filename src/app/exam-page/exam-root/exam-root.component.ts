import { Component, OnInit } from '@angular/core';
import { Exam } from '../../model/exam';

@Component({
  selector: 'app-exam-root',
  templateUrl: './exam-root.component.html',
  styleUrls: ['./exam-root.component.css']
})
export class ExamRootComponent implements OnInit {

  displaySelectedQuestion: Exam;
  constructor() {
    this.displaySelectedQuestion = new Exam();
   }
  emitSelectedQuestion(question: Exam) {
    this.displaySelectedQuestion = question;
    console.log('Emitted Root: ', question);
  }
  ngOnInit() {
  }

}
