import { createSelector } from '@ngrx/store';
import { selectCreateEmployeeState } from '../reducers';

export const selectIsCreatedEmployees = createSelector(
  selectCreateEmployeeState,
  (state) => state.created
);

export const selectEmployees = createSelector(
  selectCreateEmployeeState,
  (state) => state.employee
);

export const selectCreatingEmployee = createSelector(
  selectCreateEmployeeState,
  (state) => state.creating
);
