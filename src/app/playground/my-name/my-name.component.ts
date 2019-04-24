import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-name',
  templateUrl: './my-name.component.html',
  styleUrls: ['./my-name.component.css']
})
export class MyNameComponent implements OnInit {

  constructor() { }

  name: string;

  ngOnInit() {
    this.name = "John Rambo";
  }

}
