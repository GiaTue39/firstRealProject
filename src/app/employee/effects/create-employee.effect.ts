import { Injectable } from "@angular/core";

import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError, tap, exhaustMap } from "rxjs/operators";

import { CreateEmployeeActions } from "../actions";
import { EmployeeService } from "../services";
import { Router } from "@angular/router";

@Injectable()
export class CreateEmployeeEffect {
  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  createEmployee$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CreateEmployeeActions.createEmployee),
      map((action) => action.employee),
      exhaustMap((employees) =>
        this.employeeService.createEmployee(employees).pipe(
          map(
            (res) =>
              CreateEmployeeActions.createEmployeesSuccess({ employee: res }),
            this.router.navigate(["/employees"])
          ),
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
}
