import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  tap,
  delay,
  exhaustMap,
  filter,
} from 'rxjs/operators';

import {
  EmployeeActions,
  CreateEmployeeActions,
  DeleteEmployeeActions,
  UpdateEmployeeActions,
} from '../actions';
import { EmployeeService } from '../services';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employees } from '../models';

@Injectable()
export class EmployeeEffect {
  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  loadEmployees$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EmployeeActions.loadEmployees),
      switchMap(() =>
        this.employeeService.getEmployees().pipe(
          // delay(3000),
          map((data: any) =>
            EmployeeActions.loadEmployeesSuccess({
              employees: data.employees || data,
            })
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

  getEmployeeByID$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EmployeeActions.getEmployeesById),
      switchMap((action) =>
        this.employeeService.getEmployee(action.id).pipe(
          delay(3000),
          map((data) =>
            EmployeeActions.getEmployeesByIdSuccess({ employee: data })
          ),
          catchError((error) => {
            return of(
              EmployeeActions.getEmployeesByIDFailure({
                error: error.statusText,
              })
            );
          })
        )
      )
    );
  });

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

  createEmployeeSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CreateEmployeeActions.createEmployeesSuccess),
        tap(() => {
          this.snackBar.open('Created successfully ! :D', 'Cancel', {
            duration: 2000,
          });
          this.router.navigate(['/employees']);
        })
      );
    },
    { dispatch: false }
  );

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
          this.router.navigate(['/employees']);
          this.snackBar.open('Updated successfully ! :D', 'Cancel', {
            duration: 2000,
          });
        })
      ),
    { dispatch: false }
  );
}
