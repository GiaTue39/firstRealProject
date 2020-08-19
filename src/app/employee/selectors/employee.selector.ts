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

export const selectEmployeesByID = (id: string) =>
  createSelector(selectEmployeeState, (state) => {
    if (!state.employees || state.employees.length <= 0) {
      return null;
    }

    return state.employees.find((x) => x.id === id);
  });
