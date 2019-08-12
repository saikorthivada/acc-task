import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreTestComponent } from './shared/layouts/pre-test/pre-test.component';
import { PostTestComponent } from './shared/layouts/post-test/post-test.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/launch',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PreTestComponent,
    children: [
      {
        path: 'launch',
        loadChildren: './views/pre-test/launch/launch.module#LaunchModule'
      }
    ]
  },
  {
    path: '',
    component: PostTestComponent,
    children: [
      {
        path: 'question-one',
        loadChildren: './views/post-test/question-one/question-one.module#QuestionOneModule'
      },
      {
        path: 'question-two',
        loadChildren: './views/post-test/question-two/question-two.module#QuestionTwoModule'
      },
      {
        path: 'question-three',
        loadChildren: './views/post-test/question-three/question-three.module#QuestionThreeModule'
      },
      {
        path: 'question-four',
        loadChildren: './views/post-test/question-four/question-four.module#QuestionFourModule'
      },
      {
        path: 'question-five',
        loadChildren: './views/post-test/question-five/question-five.module#QuestionFiveModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
