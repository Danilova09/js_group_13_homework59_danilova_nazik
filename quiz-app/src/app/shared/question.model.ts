export class Question {
  constructor(
    public question: string,
    public rightAnswer: string,
    public prompt: string,
    public answerStatus ='нет ответа',
  ) { }
}
