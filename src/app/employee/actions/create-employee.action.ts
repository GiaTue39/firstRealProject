import { createAction, props } from "@ngrx/store";
import { Employees } from "../models";

export const createEmployee = createAction(
  "[Employee] Create Employees",
  props<{ employee: Employees }>()
);

export const createEmployeesSuccess = createAction(
  "[Employee] Create Employees Success",
  props<{ employee: Employees }>()
);

export const createEmployeesFailure = createAction(
  "[Employee] Create Employees Failure",
  props<{ error: any }>()
);
