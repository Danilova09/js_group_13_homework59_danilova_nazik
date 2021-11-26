import { Component, OnInit } from '@angular/core';
import { Question } from '../shared/question.model';
import { QuestionsService } from '../shared/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [];
  rightAnswers = 0;
  questionsAmount!: number;

  constructor(private questionsService: QuestionsService) {}


  ngOnInit(): void {
    this.questions = this.questionsService.getQuestions();
    this.rightAnswers = this.questionsService.getRightAnswers();
    this.questionsAmount = this.questionsService.getQuestionsAmount();
    this.questionsService.questionsChange.subscribe((questions: Question[]) => {
      this.questions = questions;
    })
    this.questionsService.onRightAnswersChange.subscribe((answersAmount: number) => {
      this.rightAnswers = answersAmount;
    })
    this.questionsService.onQuestionsAmount.subscribe((amount:number) => {
      this.questionsAmount = amount;
    })
  }

}
