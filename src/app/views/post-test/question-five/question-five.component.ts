import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils.service';

@Component({
  selector: 'app-question-five',
  templateUrl: './question-five.component.html',
  styleUrls: ['./question-five.component.scss']
})
export class QuestionFiveComponent implements OnInit {
  questionText = '5.Write a function to remove duplicate strings from an array of strings.';
  resultArr = [];
  isCaseSensitive = true;
  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
  }

  // get the array with out duplication
  getArrayList(arr: any[]) {
    this.resultArr = this.utilsService.getArrayWithoutDuplication(arr, this.isCaseSensitive);
  }

}
