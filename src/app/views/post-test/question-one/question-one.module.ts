import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionOneRoutingModule } from './question-one-routing.module';
import { QuestionOneComponent } from './question-one.component';

@NgModule({
  declarations: [QuestionOneComponent],
  imports: [
    CommonModule,
    QuestionOneRoutingModule
  ]
})
export class QuestionOneModule { }
