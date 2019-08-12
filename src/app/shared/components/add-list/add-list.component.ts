import { Component, OnInit, Output, EventEmitter, Injector } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseClass } from '../../services/baseclass';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent extends BaseClass implements OnInit {
  addListForm: FormGroup;
  itemsList: any[] = [];
  @Output()
  arrayList: EventEmitter<any> = new EventEmitter();
  validationMessages = {
    element: [
      { type: 'required', message: 'Field is Required' }
    ]
  };

  constructor(private formBuilder: FormBuilder, public injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.addListForm = this.formBuilder.group({
      element: ['', Validators.compose([Validators.required])]
    });
  }

  // adding element to list
  addElementToList() {
    const enteredValue = this.addListForm.get('element').value;
    this.itemsList.push(enteredValue);
    this.addListForm.get('element').setValue('');
  }

  // delete data from the list
  deleteFromList(index) {
    this.itemsList.splice(index, 1);
  }

  // raise event to parent
  submitArray() {
    this.arrayList.emit(this.itemsList);
  }
}
