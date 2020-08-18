import { Injectable } from "@angular/core";

import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { map, catchError, exhaustMap } from "rxjs/operators";

import { DeleteEmployeeActions } from "../actions";
import { EmployeeService } from "../services";

@Injectable()
export class DeleteEmployeeEffect {
  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService
  ) {}

  deleteEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteEmployeeActions.deleteEmployee),
      map((action) => action.id),
      exhaustMap((id: string) =>
        this.employeeService.deleteEmployee(id).pipe(
          map(() => DeleteEmployeeActions.deleteEmployeeSuccess({ id })),
          catchError((error) =>
            of(DeleteEmployeeActions.deleteEmployeeFailure({ error }))
          )
        )
      )
    )
  );
}
