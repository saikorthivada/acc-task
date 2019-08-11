import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionFiveComponent } from './question-five.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: QuestionFiveComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionFiveRoutingModule { }
