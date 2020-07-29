import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  employee = [];
  user = [];
  options: string[] = ['Name', 'Phone', 'Email', 'Status'];

  displayedColumns: string[] = ['name', 'phone', 'email', 'status'];
  dataSource = this.employeeService.getEmployee();

  constructor(
    private employeeService: EmployeeService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.employeeService.getUsers().subscribe(
      // this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
