import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionTwoComponent } from './question-two.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: QuestionTwoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionTwoRoutingModule { }
