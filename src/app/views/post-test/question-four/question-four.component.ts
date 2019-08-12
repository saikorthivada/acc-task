import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from '../../../shared/services/utils.service';
import { BaseClass } from '../../../shared/services/baseclass';

@Component({
  selector: 'app-question-four',
  templateUrl: './question-four.component.html',
  styleUrls: ['./question-four.component.scss']
})
export class QuestionFourComponent extends BaseClass implements OnInit {
  reversedStringForm: FormGroup;
  builtInOutput = '';
  customStringOutput = '';
  validationMessages = {
    stringToBeReversed: [
      { type: 'required', message: 'Field is Required' }
    ]
  };
  // tslint:disable-next-line:max-line-length
  questionText = '4.Write a function to reverse every word of a string.(a) Using split and reverse. (b) Without using split and reverse and in O(1) space(since strings are immutable, assume that the input is a character array).';
  constructor(private formBuilder: FormBuilder, private utilsService: UtilsService, public injector: Injector) {
    super(injector);
  }

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
