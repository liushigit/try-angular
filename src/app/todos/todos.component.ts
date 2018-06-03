import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = ["取钱", "买书", "买苹果"]

  constructor() { }

  ngOnInit() {
  }

}
