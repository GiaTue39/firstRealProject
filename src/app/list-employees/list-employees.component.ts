import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';
import { Employees } from '../employee';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  options: string[] = ['Name', 'Phone', 'Email', 'Status'];
  // selection = new SelectionModel<EmployeeService.getUsers()>(true, []);
  displayedColumns: string[] = ['select', 'name', 'phone', 'email', 'status'];
  dataSource = [];
  isLoading = false;

  dataSearch = new MatTableDataSource(this.dataSource);

  // dataS = new MatTableDataSource<Employees>(this.dataSource);
  selection = new SelectionModel<Employees>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.forEach((row) => this.selection.select(row));
  }

  // The label for the checkbox on the passed row
  checkboxLabel(row?: Employees): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'id'} row ${
      row.name + 1
    }`;
  }

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSearch.filter = filterValue.trim().toLowerCase();
  }

  // createEmployee() {
  //   const employee = {
  //     // id: '123',
  //     name: 'Tue',
  //     phone: '01211212',
  //     email: 'giatue@gmail.com',
  //     status: 'Disable',
  //   };
  //   this.employeeService.createEmployee(employee).subscribe(
  //     (data) => {
  //       // this.dataSource = data;
  //       console.log(data);
  //       this.isLoading = false;
  //     },
  //     (error) => {
  //       console.log(error);
  //       this.isLoading = false;
  //     }
  //   );
  // }
}
