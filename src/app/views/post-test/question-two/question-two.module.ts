import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionTwoRoutingModule } from './question-two-routing.module';
import { QuestionTwoComponent } from './question-two.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [QuestionTwoComponent],
  imports: [
    CommonModule,
    QuestionTwoRoutingModule,
    SharedModule
  ]
})
export class QuestionTwoModule { }
