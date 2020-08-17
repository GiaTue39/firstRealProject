import { createAction, props } from "@ngrx/store";

export const loadEmployees = createAction("[Employee Page] Load Employees");

export const loadEmployeesSuccess = createAction(
  "[Employee Page] Load Employees Success",
  props<{ employees: any }>()
);

export const loadEmployeesFailure = createAction(
  "[Employee Page] Load Employees Failure",
  props<{ error: any }>()
);
