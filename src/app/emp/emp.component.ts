import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent implements OnInit {
  employees !: Employee[]
  constructor() { }

  ngOnInit(): void {
    this.employees = [
      new Employee(1, "John Doe", "NY"),
      new Employee(2, "Jane Doe", "NY"),
      new Employee(3, "John Doe", "NY")
    ]
  }

}
