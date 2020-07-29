import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  options: string[] = ['Name', 'Phone', 'Email', 'Status'];

  displayedColumns: string[] = ['name', 'phone', 'email', 'status'];
  //dataSource = this.employeeService.getEmployee();
  dataSource = [];
  isLoading = false;

  constructor(
    private employeeService: EmployeeService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.employeeService.getUsers().subscribe(
      (data) => {
        this.dataSource = data;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
  
  createEmployee(){
    const employee = {
      name:'Tue',
      phone: '01211212',
      email: 'giatue@gmail.com',
      status: 'Disable'
    };
    this.employeeService.createEmployee(employee).subscribe(
      (data) => {
        // this.dataSource = data;
        console.log(data);
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
}


