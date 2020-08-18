import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";

import { Employees } from "../../models";
import { EmployeeService } from "../../services/employee.service";
import { MatDialog } from "@angular/material/dialog";
import { DialogDeleteComponent } from "./dialog-delete/dialog-delete.component";
import { Store, select } from "@ngrx/store";
import { EmployeeActions } from "../../actions";

import {
  selectIsLoadingEmployees,
  selectAllEmployees,
} from "../../selectors/employee.selector";

import { Observable } from "rxjs";

@Component({
  selector: "app-list-employees",
  templateUrl: "./list-employees.component.html",
  styleUrls: ["./list-employees.component.scss"],
})
export class ListEmployeesComponent implements OnInit {
  options: string[] = ["Name", "Phone", "Email", "Status"];
  // selection = new SelectionModel<EmployeeService.getUsers()>(true, []);
  displayedColumns: string[] = [
    "select",
    "name",
    "phone",
    "email",
    "status",
    "action",
  ];
  dataSource = [];
  isLoading = false;

  dataSearch = new MatTableDataSource(this.dataSource);

  // dataS = new MatTableDataSource<Employees>(this.dataSource);
  selection = new SelectionModel<Employees>(true, []);

  employees$: Observable<Array<Employees>>;
  isLoading$: Observable<boolean>;

  constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog,
    private store: Store
  ) {}

  ngOnInit() {
    this.employees$ = this.store.pipe(select(selectAllEmployees));
    this.isLoading$ = this.store.pipe(select(selectIsLoadingEmployees));

    this.store.dispatch(EmployeeActions.loadEmployees());

    // this.store.pipe(select(selectAllEmployees)).subscribe((data) => {
    //   console.log("data ", data);
    //   this.dataSource = data;
    // });

    // this.isLoading = true;

    // this.employeeService.getUsers().subscribe(
    //   (data) => {
    //     this.dataSource = data;
    //     this.isLoading = false;

    //     this.store.dispatch(loadEmployeesSuccess({ employees: data }));
    //   },
    //   (error) => {
    //     console.log(error);
    //     this.isLoading = false;
    //   }
    // );
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
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "id"} row ${
      row.name + 1
    }`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSearch.filter = filterValue.trim().toLowerCase();
  }

  openDialog(employee: Employees): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: "250px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed", result);
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
