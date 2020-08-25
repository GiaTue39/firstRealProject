import { createSelector } from "@ngrx/store";
import { selectUpdateEmployeeState } from "../reducers";

export const selectGetUpdatedEmployee = createSelector(
  selectUpdateEmployeeState,
  (state) => state.employee
);

export const selectUpdatingEmployee = createSelector(
  selectUpdateEmployeeState,
  (state) => state.updating
);
