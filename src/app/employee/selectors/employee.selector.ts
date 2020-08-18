import { createSelector } from "@ngrx/store";
import { selectEmployeeState } from "../reducers";

export const selectIsLoadingEmployees = createSelector(
  selectEmployeeState,
  (state) => state.loading
);

export const selectAllEmployees = createSelector(
  selectEmployeeState,
  (state) => state.employees
);

export const selectEmployeesByID = createSelector(
  selectEmployeeState,
  (state) => state.employeeID
);
