import { Component, OnInit, ViewChild } from "@angular/core";
import { MatCalendarCellCssClasses } from "@angular/material/datepicker";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { EmployeeService } from "../../services";
import { CanDeactivateComponent } from "src/app/can-deactivate.component";
import { UpdateEmployeeActions, EmployeeActions } from "../../actions";
import { Employees } from "../../models";

import {
  selectIsUpdatedEmployees,
  selectGetUpdatedEmployees,
} from "../../selectors/update-employee.selector";

import { selectEmployeesByID } from "../../selectors/employee.selector";

@Component({
  selector: "app-detail-employee",
  templateUrl: "./detail-employee.component.html",
  styleUrls: ["./detail-employee.component.scss"],
})
export class DetailEmployeeComponent implements OnInit, CanDeactivateComponent {
  @ViewChild("form") form: NgForm;

  detailEmployee: Employees = {
    id: "",
    name: "",
    phone: "",
    email: "",
    birthday: "",
    status: "",
    avatarURL: "",
    address: "",
  };

  formBuilder: any;
  isSaved$: Observable<boolean>;
  getUpdate$: Observable<Employees>;

  detailEmployee$: Observable<Employees>;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
    private store: Store
  ) {}

  componentCanDeactivate(): boolean {
    let notify: boolean;
    if (this.form.dirty) {
      notify = confirm("Do u want to LEAVE Detail Page ?");
    }
    return notify;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.store.dispatch(EmployeeActions.getEmployeesById({ id }));

    this.isSaved$ = this.store.pipe(select(selectIsUpdatedEmployees));
    this.getUpdate$ = this.store.pipe(select(selectGetUpdatedEmployees));
    this.detailEmployee$ = this.store.pipe(select(selectEmployeesByID(id)));

    this.detailEmployee$.subscribe((detailEmployee) => {
      if (detailEmployee) {
        this.detailEmployee = detailEmployee;
      }
    });
  }

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();
    return date === 1 || date === 20 ? "example-custom-date-class" : "";
  };

  onSubmit(form: NgForm): void {
    this.store.dispatch(
      UpdateEmployeeActions.updateEmployee({
        id: this.detailEmployee.id,
        employee: form.value,
      })
    );
  }
}
