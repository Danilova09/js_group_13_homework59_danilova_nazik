import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './questions/question/question.component';
import { FormsModule } from '@angular/forms';
import { QuestionsService } from './shared/questions.service';
import { CardBorderDirective } from './directives/card-border.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionComponent,
    CardBorderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
