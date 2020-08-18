import { Component, OnInit, ViewChild } from "@angular/core";
import { MatCalendarCellCssClasses } from "@angular/material/datepicker";

import { EmployeeService } from "../../services";

import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { DetailEmployeeModel } from "../../models/detail-employee";
import { CanDeactivateComponent } from "src/app/can-deactivate.component";
import { UpdateEmployeeActions, EmployeeActions } from "../../actions";
import { Employees } from "../../models";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import {
  selectIsUpdatedEmployees,
  selectGetUpdatedEmployees,
} from "../../selectors/update-employee.selector";

@Component({
  selector: "app-detail-employee",
  templateUrl: "./detail-employee.component.html",
  styleUrls: ["./detail-employee.component.scss"],
})
export class DetailEmployeeComponent implements OnInit, CanDeactivateComponent {
  @ViewChild("form") form: NgForm;

  formBuilder: any;
  detailEmployees: DetailEmployeeModel;
  isSaved$: Observable<boolean>;
  getUpdate$: Observable<Employees>;

  detailEmployee$: Observable<DetailEmployeeModel>;

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
      notify = confirm("Do u want to leave DETAIL EMPLOYEE page ?");
    }
    return notify;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    // this.employeeService.getEmployee(id).subscribe((employee) => {
    //   this.detailEmployee = employee;
    // });

    this.store.dispatch(EmployeeActions.getEmployeesById({ id }));

    this.isSaved$ = this.store.pipe(select(selectIsUpdatedEmployees));
    this.getUpdate$ = this.store.pipe(select(selectGetUpdatedEmployees));

    this.detailEmployee$.subscribe((detailEmployees) => {
      if (detailEmployees) {
        this.detailEmployees = detailEmployees;
      }
    });
  }

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();
    // Highlight the 1st and 20th day of each month.
    return date === 1 || date === 20 ? "example-custom-date-class" : "";
  };

  detailEmployee: DetailEmployeeModel = {
    id: "",
    name: "",
    phone: "",
    email: "",
    birthday: "",
    status: "",
    avatarURL: "",
    address: "",
  };

  onSubmit(form: NgForm): void {
    console.log(form);
    //   if (form.valid) {
    //     console.log('valid');
    //   }

    //   this.employeeService
    //     .update(this.detailEmployee.id, this.detailEmployee)
    //     .subscribe((employee) => {
    //       this.detailEmployee = employee;
    //     });
    //   this.snackBar.open('Saved successfully ! :D', 'Cancel', {
    //     duration: 4000,
    //   });
    //   this.router.navigate(['/employees']);
    // }

    this.store.dispatch(
      UpdateEmployeeActions.updateEmployee({
        id: this.detailEmployee.id,
        employee: form.value,
      })
    );
  }
}
