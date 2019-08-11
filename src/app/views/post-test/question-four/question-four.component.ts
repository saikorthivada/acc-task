import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from '../../../shared/services/utils.service';

@Component({
  selector: 'app-question-four',
  templateUrl: './question-four.component.html',
  styleUrls: ['./question-four.component.scss']
})
export class QuestionFourComponent implements OnInit {
  reversedStringForm: FormGroup;
  builtInOutput = '';
  customStringOutput = '';
  constructor(private formBuilder: FormBuilder, private utilsService: UtilsService) { }

  ngOnInit() {
    this.initiateForm();
  }

  initiateForm() {
    this.reversedStringForm = this.formBuilder.group({
      stringToBeReversed: ['', Validators.compose([Validators.required])]
    });
  }

  // for clearing the text given
  clearText() {
    this.reversedStringForm.get('stringToBeReversed').setValue('');
    this.customStringOutput = '';
    this.builtInOutput = '';
  }
  // reverse words of string
  reverseWordsOfString() {
    const stringToBeReversed = this.reversedStringForm.get('stringToBeReversed').value;
    this.customStringOutput = this.utilsService.getReverseWordsOfString(stringToBeReversed);
    this.builtInOutput = this.utilsService.getReverseWordsOfStringBuiltIn(stringToBeReversed);
  }

}
