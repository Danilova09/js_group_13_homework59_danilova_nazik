import { Question } from './question.model';

export class QuestionsService {
  private questions: Question[] = [
    new Question ('Столица Франции ?', 'Париж', 'круассаны и багеты'),
    new Question ('Самая длинная река в мире ?', 'Амазонка', 'Находится в Южной Америке'),
    new Question ('Единица измерения силы тока ?', 'Ампер', 'Французский физик'),
    new Question ('Сколько хромосом в геноме человека ?', '46', '23 * 2'),
    new Question ('Как называется самая высокая гора в мире ?', 'Эверест', 'Находится в Непале'),
    new Question ('Сколько осталось до Нового года ?', '500 сомов', '500 сомов'),
    new Question ('Самый лучший букмекер ?', '1xBet', 'назойливая реклама'),
    new Question ('Продолжите текст песни Maria hee, Maria haa, Maria hee, Maria ...', 'ha ha', 'Междометие радости'),
  ];

  getQuestions() {
    return this.questions.slice();
  }

}
