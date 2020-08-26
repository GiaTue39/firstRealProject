import { createAction, props } from "@ngrx/store";
import { DetailEmployeeModel } from "../models";

export const updateEmployee = createAction(
  "[Employee Page] Update employee",
  props<{ id: string; employee: DetailEmployeeModel }>()
);

export const updateEmployeeSuccess = createAction(
  "[Employee Page] Update employee success",
  props<{ employee: DetailEmployeeModel }>()
);

export const updateEmployeeFailure = createAction(
  "[Employee Page] Update employee failure",
  props<{ error: any }>()
);
