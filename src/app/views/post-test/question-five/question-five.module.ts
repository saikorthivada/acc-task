import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionFiveRoutingModule } from './question-five-routing.module';
import { QuestionFiveComponent } from './question-five.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [QuestionFiveComponent],
  imports: [
    CommonModule,
    QuestionFiveRoutingModule,
    SharedModule
  ]
})
export class QuestionFiveModule { }
