import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AddListComponent } from './components/add-list/add-list.component';
import { OutputComponent } from './components/output/output.component';
import { QuestionComponent } from './components/question/question.component';
@NgModule({
  declarations: [AddListComponent, OutputComponent, QuestionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    AddListComponent,
    OutputComponent,
    QuestionComponent
  ]
})
export class SharedModule { }
