import { Injectable } from "@angular/core";

import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError, tap } from "rxjs/operators";

import { EmployeeActions } from "./actions";
import { EmployeeService } from "./services";

@Injectable()
export class EmployeeEffect {
  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService
  ) {}

  loadEmployees$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EmployeeActions.loadEmployees),
      switchMap(() =>
        this.employeeService.getEmployees().pipe(
          map((data) =>
            EmployeeActions.loadEmployeesSuccess({ employees: data })
          ),
          catchError((error) => {
            return of(
              EmployeeActions.loadEmployeesFailure({ error: error.statusText })
            );
          })
        )
      )
    );
  });
}
