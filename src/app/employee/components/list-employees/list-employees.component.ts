import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

import { Employees } from '../../models';
import { EmployeeService } from '../../services/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  options: string[] = ['Name', 'Phone', 'Email', 'Status'];
  // selection = new SelectionModel<EmployeeService.getUsers()>(true, []);
  displayedColumns: string[] = [
    'select',
    'name',
    'phone',
    'email',
    'status',
    'action',
  ];
  dataSource = [];
  isLoading = false;

  dataSearch = new MatTableDataSource(this.dataSource);

  // dataS = new MatTableDataSource<Employees>(this.dataSource);
  selection = new SelectionModel<Employees>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */

  constructor(
    private employeeService: EmployeeService,
    private http: HttpClient,
    public dialog: MatDialog
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSearch.filter = filterValue.trim().toLowerCase();
  }

  openDialog(employee: Employees): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      if (result) {
        this.onDelete(employee);
      }
    });
  }

  onDelete(employee: Employees) {
    this.employeeService.deleteEmployee(employee.id).subscribe(() => {
      const data = [];
      // for (var i = 0; i < this.dataSource.length; i++) {
      //   if (this.dataSource[i].id !== employee.id) {
      //     data.push(this.dataSource[i]);
      //   }
      // }
      // this.dataSource.forEach((e) => {
      //   if (e.id !== employee.id) {
      //     data.push(e);
      //   }
      // });
      // this.dataSource = data;
      this.dataSource = this.dataSource.filter((e) => e.id !== employee.id);
    });
  }
}
