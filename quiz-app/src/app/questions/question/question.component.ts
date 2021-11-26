import { Component, Input, OnInit } from '@angular/core';
import { QuestionsService } from '../../shared/questions.service';
import { Question } from '../../shared/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question!: Question;
  @Input() answerStatus!: string;
  isClicked = false;
  promptIsOpen = false;
  answer = '';
  alert!: string;

  constructor(private questionsService: QuestionsService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.questionsService.onQuestionsChange();
    this.questionsService.checkAnswer(this.question, this.answer);
    this.isClicked = true;
    if (this.question.answerStatus === 'ответ верный') {
      this.alert = 'alert-success';
    } else if (this.question.answerStatus === 'ответ неверный') {
      this.alert = 'alert-danger';
    }

  }

  alertResponse($event: string) {
    console.log('alert response');
  }

  promptToggle() {
    this.promptIsOpen = !this.promptIsOpen;
  }
}
