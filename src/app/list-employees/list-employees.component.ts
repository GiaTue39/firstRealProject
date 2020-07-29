import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
// import{ Employees} from './employee';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  employee = [];
  options: string[] = ['Name', 'Phone', 'Email', 'Status'];

  displayedColumns: string[] = ['name', 'phone', 'email', 'status'];
  dataSource = this.employeeService.getEmployee();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}
}
