import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rforms',
  templateUrl: './rforms.component.html',
  styleUrls: ['./rforms.component.css']
})
export class RformsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  private profileForm: FormGroup;

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['']
    });

    this.profileForm.valueChanges.subscribe(data => console.log(data));
  }

  onSubmit() {
    alert("on submit")
  }

}
