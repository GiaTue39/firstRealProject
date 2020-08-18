import { createAction, props } from "@ngrx/store";
import { Employees } from "../models";

export const updateEmployee = createAction(
  "[Employee Page] Update employee",
  props<{ id: string; employee: Employees }>()
);

export const updateEmployeeSuccess = createAction(
  "[Employee Page] Update employee success",
  props<{ employee: Employees }>()
);

export const updateEmployeeFailure = createAction(
  "[Employee Page] Update employee failure",
  props<{ error: any }>()
);
