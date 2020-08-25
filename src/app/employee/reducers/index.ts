import { Action, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import * as fromRouter from '@ngrx/router-store';

import * as fromEmployee from './employee.reducer';
import * as fromCreateEmployee from './create-employee.reducer';
import * as fromUpdateEmployee from './update-employee.reducer';

export interface AppState {
  employee: fromEmployee.State;
  createEmployee: fromCreateEmployee.State;

  updateEmployee: fromUpdateEmployee.State;
  router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>('Employee reducers token', {
  factory: () => ({
    employee: fromEmployee.reducer,
    createEmployee: fromCreateEmployee.reducer,

    updateEmployee: fromUpdateEmployee.reducer,
    router: fromRouter.routerReducer,
  }),
});

export const selectEmployeeFeatureState = createFeatureSelector<any>(
  'employee'
);

export const selectEmployeeState = createSelector(
  selectEmployeeFeatureState,
  (state) => state.employee
);

export const selectCreateEmployeeState = createSelector(
  selectEmployeeFeatureState,
  (state) => state.createEmployee
);

export const selectDeleteEmployeeState = createSelector(
  selectEmployeeFeatureState,
  (state) => state.deleteEmployee
);

export const selectUpdateEmployeeState = createSelector(
  selectEmployeeFeatureState,
  (state) => state.updateEmployee
);
