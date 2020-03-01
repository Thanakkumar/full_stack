import { Component, OnInit } from '@angular/core';
export class todo {
  constructor(
    public id: number,
    public desc: String,
    public flag: boolean,
    public targetDate: Date
  ) {

  }
}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }
  todos = [new todo(1,"take the list",true,new Date()),
  new todo(2,"do copy",true,new Date()),
  new todo(1,"take the list",true,new Date())
  ]
  ngOnInit() {
  }

}
