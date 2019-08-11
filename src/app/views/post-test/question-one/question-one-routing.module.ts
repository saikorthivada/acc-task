import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionOneComponent } from './question-one.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: QuestionOneComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionOneRoutingModule { }
