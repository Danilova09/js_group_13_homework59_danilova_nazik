import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../shared/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question!: Question;
  prompt = false;
  answer = '';

  constructor() { }

  onPromptToggle() {
    this.prompt = !this.prompt;
  }

  onSubmit() {
    console.log('is submitted');
    console.log(this.answer);
  }

}
