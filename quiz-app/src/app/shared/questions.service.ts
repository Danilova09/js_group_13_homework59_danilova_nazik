import { EventEmitter, Output } from '@angular/core';
import { Question } from './question.model';

export class QuestionsService {
  private rightAnswers = 0;
  questionsChange = new EventEmitter<Question[]>();
  onRightAnswersChange = new EventEmitter<number>();
  onQuestionsAmount = new EventEmitter<number>();
  private questions: Question[] = [
    new Question('Столица Франции ?', 'Париж', 'круассаны и багеты'),
    new Question('Самая длинная река в мире ?', 'Амазонка', 'Находится в Южной Америке'),
    new Question('Единица измерения силы тока ?', 'Ампер', 'Французский физик'),
    new Question('Сколько хромосом в геноме человека ?', '46', '23 * 2'),
    new Question('Как называется самая высокая гора в мире ?', 'Эверест', 'Находится в Непале'),
    new Question('Сколько осталось до Нового года ?', '500 сомов', '500 сомов'),
    new Question('Самый лучший букмекер ?', '1xBet', 'назойливая реклама'),
    new Question('Продолжите текст песни Maria hee, Maria haa, Maria hee, Maria ...', 'ha ha', 'Междометие радости'),
  ];

  private questionsAmount = this.questions.length;

  getQuestionsAmount() {
    return this.questions.length;
  }

  getQuestions() {
    return this.questions.slice();
  }

  onQuestionsChange() {
    this.questionsChange.emit(this.questions);
  }

  getRightAnswers() {
    return this.rightAnswers;
  }

  rightAnswersChange() {
    this.onRightAnswersChange.emit(this.rightAnswers);
  }

  gotRightAnswer() {
    this.rightAnswers++;
    this.rightAnswersChange();
  }

  checkAnswer(question: Question, userAnswer: string) {
    let index = this.questions.indexOf(question);
    if (question.rightAnswer === userAnswer) {
      this.questions[index].answerStatus = 'ответ верный';
      this.gotRightAnswer();
    } else {
      this.questions[index].answerStatus = 'ответ неверный';
    }
  }

}
