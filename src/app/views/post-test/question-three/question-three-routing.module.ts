import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionThreeComponent } from './question-three.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: QuestionThreeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionThreeRoutingModule { }
