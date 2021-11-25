import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';
import { Question } from '../shared/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [];
  answersAmount!: number;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.questions = this.questionsService.getQuestions();
    this.answersAmount = this.questions.length;
  }

}
