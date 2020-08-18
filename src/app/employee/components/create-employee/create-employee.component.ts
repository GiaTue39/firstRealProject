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
import { Employees } from "../../models";

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
    // Highlight the 1st and 20th day of each month.
    return date === 1 || date === 20 ? "example-custom-date-class" : "";
  };

  onSubmit(employee: NgForm) {
    console.log(employee.value);
    // debugger;
    // console.log(form);
    // this.message = "";

    // const employee = {
    //   name: this.createEmployee.name,
    //   phone: this.createEmployee.phone,
    //   email: this.createEmployee.email,
    //   birthday: this.createEmployee.birthday,
    //   status: this.createEmployee.status,
    //   address: this.createEmployee.address,
    // };

    // if (
    //   this.createEmployee.name === '' ||
    //   this.createEmployee.phone === '' ||
    //   this.createEmployee.email === '' ||
    //   this.createEmployee.birthday === '' ||
    //   this.createEmployee.status === '' ||
    //   this.createEmployee.address === ''
    // ) {
    //   return (this.message = 'Please enter all fields');
    // } else {
    //   this.employeeService.createEmployee(this.createEmployee).subscribe((data) => {
    //     console.log(data);
    //     alert('Created successfully !');
    //     window.location.href = './employees';
    //   });
    // }

    this.store.dispatch(
      CreateEmployeeActions.createEmployee({ employee: employee.value })
    );

    // if (form.invalid) {
    //   this.message = "Please enter all fields";
    //   return;
    // }

    // this.employeeService
    //   .createEmployee(this.createEmployee)
    //   .subscribe((data) => {
    //     console.log(data);
    //     // alert('Created successfully !');
    //     this.snackBar.open("Created successfully ! :D", "Cancel", {
    //       duration: 2000,
    //     });
    //     // window.location.href = './employees';
    //     this.router.navigate(["/employees"]);
    //   });
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
    // if (ob.checked) {
    //   this.createEmployee.status = 'Enable';
    // } else {
    //   this.createEmployee.status = 'Disable';
    // }

    this.createEmployee.status = ob.checked ? "Enable" : "Disable";
  }
}
