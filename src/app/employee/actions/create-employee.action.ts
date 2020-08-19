import { createAction, props } from "@ngrx/store";
import { Employees } from "../models";

export const createEmployee = createAction(
  "[Create Employee Page] Create Employees",
  props<{ employee: Employees }>()
);

export const createEmployeesSuccess = createAction(
  "[Create Employee Page] Create Employees Success",
  props<{ employee: Employees }>()
);

export const createEmployeesFailure = createAction(
  "[Create Employee Page] Create Employees Failure",
  props<{ error: any }>()
);
