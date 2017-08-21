import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Exam } from '../../model/exam';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  examArr: Exam[];
  selectedQuestion: Exam;

  @Output()
  emitSelectedQuestion: EventEmitter<Exam>;

  questionsRemaining: number;
  questionsAnswered: number;

  constructor() {
    this.examArr = new Array<Exam>();
    this.selectedQuestion = new Exam();
    this.questionsRemaining = 0;
    this.questionsAnswered = 0;
    this.emitSelectedQuestion = new EventEmitter<Exam>();
    const exam_q1 = new Exam();
    exam_q1.Question = 'Why did the chicken cross the road?';
    exam_q1.Answer = 'To get to the other side';
    exam_q1.Answered = false;
    this.examArr.push(exam_q1);

   const exam_q2 = new Exam();
   exam_q2.Question = 'How are you?';
   exam_q2.Answer = 'Fine, thank you';
   exam_q2.Answered = false;
   this.examArr.push(exam_q2);

   const exam_q3 = new Exam();
   exam_q3.Question = 'How much?';
   exam_q3.Answer = 'Very much';
   exam_q3.Answered = false;
   this.examArr.push(exam_q3);
   this.questionsRemaining = this.examArr.length;
  }

  ngOnInit() {
  }

  setSelectedMovie(question) {
    console.log('Selected : ',  question);
    this.selectedQuestion = question;
    this.emitSelectedQuestion.emit(question);
  }

}
