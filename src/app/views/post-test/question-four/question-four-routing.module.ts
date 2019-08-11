import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionFourComponent } from './question-four.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: QuestionFourComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionFourRoutingModule { }
