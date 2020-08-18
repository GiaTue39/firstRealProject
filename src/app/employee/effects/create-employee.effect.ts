import { Injectable } from "@angular/core";

import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError, tap, exhaustMap } from "rxjs/operators";

import { CreateEmployeeActions } from "../actions";
import { EmployeeService } from "../services";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class CreateEmployeeEffect {
  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  createEmployee$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CreateEmployeeActions.createEmployee),
      map((action) => action.employee),
      exhaustMap((employee) =>
        this.employeeService.createEmployee(employee).pipe(
          map((res) => {
            return CreateEmployeeActions.createEmployeesSuccess({
              employee: res,
            });
          }),
          catchError((error) =>
            of(
              CreateEmployeeActions.createEmployeesFailure({
                error: error.statusText,
              })
            )
          )
        )
      )
    );
  });

  createEmployeeSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CreateEmployeeActions.createEmployeesSuccess),
      tap(() => {
        this.router.navigate(["/employees"]);
        this.snackBar.open("Created successfully ! :D", "Cancel", {
          duration: 2000,
        });
      })
    );
  });
}
