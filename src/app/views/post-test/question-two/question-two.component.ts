import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils.service';

@Component({
  selector: 'app-question-two',
  templateUrl: './question-two.component.html',
  styleUrls: ['./question-two.component.scss']
})
export class QuestionTwoComponent implements OnInit {

  resultObj = {};
  isCaseSensitive = true;
  // tslint:disable-next-line:max-line-length
  questionText = '1. Write a function which accepts an array of strings and returns a map of character to count of the character(including spaces and special characters). Eg: input: [‘hello world’, ‘hello world’] output: { h: 2, e: 2, l: 6, ‘ ‘: 1, o: 4 …… }';
  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
  }

  getArrayList(arr) {
    this.resultObj = this.utilsService.getCountOfEachLetterInArray(arr, this.isCaseSensitive);
  }
}
