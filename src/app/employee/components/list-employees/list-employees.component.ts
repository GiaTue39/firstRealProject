import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

import { Employees } from '../../models';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { Store, select } from '@ngrx/store';
import { EmployeeActions, DeleteEmployeeActions } from '../../actions';

import {
  selectIsLoadingEmployees,
  selectAllEmployees,
} from '../../selectors/employee.selector';

import { selectIsDeletedEmployees } from '../../selectors/delete-employee.selector';

import { Observable } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss'],
})
export class ListEmployeesComponent implements OnInit {
  options: string[] = ['Name', 'Phone', 'Email', 'Birthday'];
  displayedColumns: string[] = [
    'select',
    'name',
    'phone',
    'email',
    'birthday',
    'action',
  ];
  dataSource = [];

  dataSearch = new MatTableDataSource(this.dataSource);

  selection = new SelectionModel<Employees>(true, []);

  employees$: Observable<Array<Employees>>;
  isLoading$: Observable<boolean>;
  isDeleted$: Observable<boolean>;

  constructor(
    public dialog: MatDialog,
    private store: Store,
    private translocoService: TranslocoService
  ) {}

  ngOnInit() {
    this.employees$ = this.store.pipe(select(selectAllEmployees));
    this.isLoading$ = this.store.pipe(select(selectIsLoadingEmployees));
    this.store.dispatch(EmployeeActions.loadEmployees());
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.forEach((row) => this.selection.select(row));
  }

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
    this.store.dispatch(
      DeleteEmployeeActions.deleteEmployee({ id: employee.id })
    );
  }
}
