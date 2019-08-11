import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {
  addListForm: FormGroup;
  itemsList: any[] = [];
  @Output()
  arrayList: EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { }

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
