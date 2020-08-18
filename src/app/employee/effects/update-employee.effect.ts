import { Injectable } from "@angular/core";

import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { map, catchError, exhaustMap, tap } from "rxjs/operators";

import { EmployeeService } from "../services";
import { UpdateEmployeeActions } from "../actions";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class UpdateEmployeeEffect {
  notify: any;
  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdateEmployeeActions.updateEmployee),
      exhaustMap(({ id, employee }) =>
        this.employeeService.update(id, employee).pipe(
          map((res) =>
            UpdateEmployeeActions.updateEmployeeSuccess({ employee: res })
          ),
          catchError((error) =>
            of(UpdateEmployeeActions.updateEmployeeFailure({ error }))
          )
        )
      )
    )
  );

  onUpdateEmployeeSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UpdateEmployeeActions.updateEmployeeSuccess),
        tap(() => {
          this.router.navigate(["/employees"]);
          this.snackBar.open("Updated successfully ! :D", "Cancel", {
            duration: 2000,
          });
        })
      ),
    { dispatch: false }
  );
}
