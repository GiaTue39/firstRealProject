import { createAction, props } from "@ngrx/store";
export const deleteEmployee = createAction(
  "[Employee Page] Delete employee",
  props<{ id: string }>()
);

export const deleteEmployeeSuccess = createAction(
  "[Employee Page] Delete employee success",
  props<{ id: string }>()
);

export const deleteEmployeeFailure = createAction(
  "[Employee Page] Delete employee failure",
  props<{ error: any }>()
);
