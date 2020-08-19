import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from "@angular/core";
import { MatCalendarCellCssClasses } from "@angular/material/datepicker";
import { CreateEmployeeModel } from "../../models/createEmployee";
import { EmployeeService } from "../../services/employee.service";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { NgForm } from "@angular/forms";
import { CanDeactivateComponent } from "src/app/can-deactivate.component";

import { Store, select } from "@ngrx/store";
import { CreateEmployeeActions } from "../../actions";
import { Observable } from "rxjs";
import {
  selectIsCreatedEmployees,
  selectEmployees,
} from "../../selectors/create-employee.selector";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.scss"],
})
export class CreateEmployeeComponent implements OnInit, CanDeactivateComponent {
  @Output() change: EventEmitter<MatSlideToggleChange>;
  @ViewChild("form") form: NgForm;

  message: string;

  employees$: Observable<any>;
  isCreated$: Observable<boolean>;

  createEmployee: CreateEmployeeModel = {
    name: "",
    phone: "",
    email: "",
    birthday: "",
    avatarURL: "",
    status: "Disable",
    address: "",
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private snackBar: MatSnackBar,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.employees$ = this.store.pipe(select(selectEmployees));
    this.isCreated$ = this.store.pipe(select(selectIsCreatedEmployees));
  }

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();
    return date === 1 || date === 20 ? "example-custom-date-class" : "";
  };

  onSubmit(employee: NgForm) {
    this.store.dispatch(
      CreateEmployeeActions.createEmployee({ employee: employee.value })
    );
  }

  componentCanDeactivate(): boolean {
    // console.log(this.form);
    let notify: boolean;
    if (this.form.dirty) {
      notify = confirm("Do u want to leave CREATE EMPLOYEE page ?");
    }
    return notify;
  }

  onChange(ob: MatSlideToggleChange) {
    this.createEmployee.status = ob.checked ? "Enable" : "Disable";
  }
}
