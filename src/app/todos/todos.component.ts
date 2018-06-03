import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ToDo[] = [
    { title: "取钱" },
    { title: "买书" },
    { title: "买苹果" },
  ]

  selectedTodo: ToDo;

  onSelect(todo: ToDo) : void {
    this.selectedTodo = todo
  }

  constructor() { }

  ngOnInit() {
    
  }



}
