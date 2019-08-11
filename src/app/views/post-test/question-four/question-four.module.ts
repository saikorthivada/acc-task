import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionFourRoutingModule } from './question-four-routing.module';
import { QuestionFourComponent } from './question-four.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [QuestionFourComponent],
  imports: [
    CommonModule,
    QuestionFourRoutingModule,
    SharedModule
  ]
})
export class QuestionFourModule { }
