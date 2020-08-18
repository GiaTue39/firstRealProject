import { createSelector } from "@ngrx/store";
import { selectUpdateEmployeeState } from "../reducers";

export const selectIsUpdatedEmployees = createSelector(
  selectUpdateEmployeeState,
  (state) => state.saved
);

export const selectGetUpdatedEmployees = createSelector(
  selectUpdateEmployeeState,
  (state) => state.employee
);
