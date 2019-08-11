import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionThreeRoutingModule } from './question-three-routing.module';
import { QuestionThreeComponent } from './question-three.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [QuestionThreeComponent],
  imports: [
    CommonModule,
    QuestionThreeRoutingModule,
    SharedModule
  ]
})
export class QuestionThreeModule { }
