import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '../../../shared/services/utils.service';
import { BaseClass } from '../../../shared/services/baseclass';

@Component({
  selector: 'app-question-three',
  templateUrl: './question-three.component.html',
  styleUrls: ['./question-three.component.scss']
})
export class QuestionThreeComponent extends BaseClass implements OnInit {
  // tslint:disable-next-line:max-line-length
  questionText = '3. Write a function to return all the keys present in an object at any level. Eg: input: {  a: 5, b: { c: { d: 10 } }}   output: [a, b, c, d]';
  jsonForm: FormGroup;
  result: any[] = [];
  validationMessages = {
    JSONelement: [
      { type: 'required', message: 'Field is Required' }
    ]
  };
  constructor(private formBuilder: FormBuilder, private utilsService: UtilsService, public injector: Injector) {
    super(injector);
  }
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.jsonForm = this.formBuilder.group({
      JSONelement: ['', Validators.compose([Validators.required])]
    });
  }

  getObjectKeys() {
    try {
      const parsedContent = JSON.parse(this.jsonForm.get('JSONelement').value);
      this.result = this.utilsService.getJsonKeys(parsedContent);
    } catch (e) {
      alert('invalid json');
      this.result = [];
    }
  }
}
